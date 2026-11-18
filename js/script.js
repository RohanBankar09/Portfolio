/**
 * ============================================================================
 * ROHAN BANKAR — CYBERSECURITY PORTFOLIO
 * Main JavaScript Controller
 * ============================================================================
 */

(function () {
  'use strict';

  // --- Constants & Config ---
  const EMAIL_ADDRESS = 'iam.rohanbankar@gmail.com';
  const RESUME_PATH = './assets/documents/resume.pdf';
  const RESUME_DOWNLOAD_NAME = 'Rohan-Bankar-Cybersecurity-Resume.pdf';

  // --- DOM Elements ---
  const header = document.querySelector('.site-header');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const floatingTopBtn = document.querySelector('.floating-top-btn');
  const footerYearEl = document.getElementById('current-year');
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  const resumeDownloadBtns = document.querySelectorAll('.btn-download-resume');
  const toastContainer = document.getElementById('toast-container');
  const resumeModal = document.getElementById('resume-modal');
  const modalCloseBtns = document.querySelectorAll('.modal-close-trigger');

  // --- 1. Dynamic Year in Footer ---
  if (footerYearEl) {
    footerYearEl.textContent = new Date().getFullYear();
  }

  // --- 2. Mobile Navigation Toggle ---
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      toggleMobileMenu(!isExpanded);
    });

    // Close menu when a link is clicked
    navLinkItems.forEach((link) => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('is-open')) {
          toggleMobileMenu(false);
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        toggleMobileMenu(false);
      }
    });
  }

  function toggleMobileMenu(open) {
    hamburgerBtn.setAttribute('aria-expanded', String(open));
    hamburgerBtn.classList.toggle('is-active', open);
    navLinks.classList.toggle('is-open', open);

    // Prevent body scroll when menu is open on mobile
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // --- 3. Active Section Navigation Highlighting (ScrollSpy) ---
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = header ? header.offsetHeight : 72;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight - 80;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinkItems.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- 4. Floating Back-to-Top Button & Header Scrolled State ---
  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Active link update
    updateActiveNavLink();

    // Floating Back-to-top visibility
    if (floatingTopBtn) {
      if (scrollY > 380) {
        floatingTopBtn.classList.add('is-visible');
        floatingTopBtn.setAttribute('aria-hidden', 'false');
      } else {
        floatingTopBtn.classList.remove('is-visible');
        floatingTopBtn.setAttribute('aria-hidden', 'true');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Initial check
  updateActiveNavLink();

  // Scroll to top click event
  if (floatingTopBtn) {
    floatingTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 5. Project Details Expand / Collapse ---
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {
    const toggleBtn = card.querySelector('.toggle-details-btn');
    const caseStudy = card.querySelector('.project-case-study');

    if (toggleBtn && caseStudy) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');

        if (isExpanded) {
          card.classList.remove('expanded');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.querySelector('.btn-text').textContent = 'View Case Study & Details';
        } else {
          card.classList.add('expanded');
          toggleBtn.setAttribute('aria-expanded', 'true');
          toggleBtn.querySelector('.btn-text').textContent = 'Hide Case Study';
        }
      });
    }
  });

  // --- 6. Copy Email Functionality & Toast Notification ---
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(EMAIL_ADDRESS);
          showToast('Email copied successfully: ' + EMAIL_ADDRESS);
        } else {
          // Fallback using temporary textarea
          copyUsingFallback(EMAIL_ADDRESS);
        }
      } catch (err) {
        copyUsingFallback(EMAIL_ADDRESS);
      }
    });
  });

  function copyUsingFallback(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    tempInput.style.top = '0';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showToast('Email copied successfully: ' + text);
      } else {
        showToast('Please copy manually: ' + text);
      }
    } catch (err) {
      showToast('Please copy manually: ' + text);
    } finally {
      document.body.removeChild(tempInput);
    }
  }

  function showToast(message, duration = 3500) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  // --- 7. Resume Download Logic & Verification ---
  resumeDownloadBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Check if resume file is accessible via HEAD request or direct download
      fetch(RESUME_PATH, { method: 'HEAD' })
        .then((response) => {
          if (response.ok) {
            // Trigger actual download
            const downloadLink = document.createElement('a');
            downloadLink.href = RESUME_PATH;
            downloadLink.download = RESUME_DOWNLOAD_NAME;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            showToast('Starting resume download...');
          } else {
            // File not found on server
            openResumeModal();
          }
        })
        .catch(() => {
          // If fetch fails (e.g. running on local file:// origin without local web server)
          // Attempt direct link navigation
          window.open(RESUME_PATH, '_blank');
        });
    });
  });

  function openResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add('is-open');
      resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('is-open');
      resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', closeResumeModal);
  });

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resumeModal.classList.contains('is-open')) {
        closeResumeModal();
      }
    });
  }

  // --- 8. Interactive Cybersecurity Terminal Component ---
  const terminalInput = document.getElementById('terminal-interactive-input');
  const terminalHistory = document.getElementById('terminal-history');

  if (terminalInput && terminalHistory) {
    const COMMANDS = {
      help: 'Available commands: whoami, focus, status, skills, projects, contact, clear',
      whoami: 'Rohan Bankar — Cybersecurity Specialist | VAPT & Security Research',
      focus: 'Web Application Security, Vulnerability Assessment, Network Reconnaissance',
      status: 'Learning. Testing. Improving. Available for opportunities.',
      skills: 'Pen Testing, OWASP Top 10, Burp Suite, Nmap, Wireshark, Python, Kali Linux',
      projects: '[01] DVWA VAPT  [02] AES-256 Encrypted Chat  [03] Multi-threaded Port Scanner',
      contact: 'Email: iam.rohanbankar@gmail.com | Location: Chh. Sambhajinagar, India',
      clear: 'CLEAR'
    };

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';

        if (!rawCmd) return;

        if (rawCmd === 'clear') {
          terminalHistory.innerHTML = '';
          return;
        }

        const cmdLine = document.createElement('div');
        cmdLine.className = 'terminal-line';
        cmdLine.innerHTML = `
          <div><span class="terminal-prompt">root@rohan-security:~$</span> <span class="terminal-command">${escapeHtml(rawCmd)}</span></div>
        `;

        const respLine = document.createElement('div');
        respLine.className = 'terminal-output';

        if (COMMANDS[rawCmd]) {
          respLine.textContent = COMMANDS[rawCmd];
          respLine.classList.add('accent-purple');
        } else {
          respLine.textContent = `zsh: command not found: ${rawCmd}. Type "help" for available commands.`;
          respLine.style.color = 'var(--text-muted)';
        }

        terminalHistory.appendChild(cmdLine);
        terminalHistory.appendChild(respLine);

        // Keep view scrolled to latest command
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
          terminalBody.scrollTop = terminalBody.scrollHeight;
        }
      }
    });
  }

  function escapeHtml(string) {
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }

  // --- 9. Scroll Reveal Animations ---
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // If reduced motion is preferred or IntersectionObserver is unsupported, reveal all
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('is-revealed');
    });
  }
})();
