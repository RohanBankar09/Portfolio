# Rohan Bankar — Cybersecurity Portfolio Website

A modern, high-performance, responsive cybersecurity portfolio website engineered for **Rohan Bankar**, an entry-level cybersecurity professional specializing in **Vulnerability Assessment and Penetration Testing (VAPT)**, **Web Application Security**, **Network Security**, and **Security Research**.

Designed with a sleek, premium **Black, White, and Purple** technical visual identity, built strictly with semantic **HTML5**, modern **CSS3**, and **Vanilla JavaScript** with zero external dependencies, no build steps, and full out-of-the-box compatibility with **GitHub Pages**.

---

## 🛡️ Live Demo & Repository

- **GitHub Repository**: [https://github.com/RohanBankar09/MyPortfolio](https://github.com/RohanBankar09/MyPortfolio) *(or your repository name)*
- **GitHub Pages URL**: `https://rohanbankar09.github.io/MyPortfolio/` *(once enabled)*

---

## ⚡ Tech Stack & Architecture

- **Markup**: Semantic HTML5 (ARIA attributes, accessible landmark roles)
- **Styling**: Modern CSS3 (Custom Properties, CSS Grid, Flexbox, media queries down to 320px)
- **Scripting**: Vanilla JavaScript ES6+ (No jQuery, React, or heavy libraries)
- **Typography**: Inter (UI/Body) & JetBrains Mono (Terminal & Code elements)
- **Icons**: Scalable, high-contrast inline SVG graphics
- **Dependencies**: **0** (Zero runtime libraries, zero npm dependencies)
- **Deployment Target**: GitHub Pages (Static hosting)

---

## 📁 Project Structure

```text
cybersecurity-portfolio/
├── index.html                   # Core single-page website
├── README.md                    # Documentation & deployment guide
├── .gitignore                   # Git ignore rules for system/editor files
├── css/
│   └── style.css                # Master stylesheet (theme tokens, components, responsive layout)
├── js/
│   └── script.js                # Interactive logic (ScrollSpy, terminal, copy-to-clipboard, drawer)
└── assets/
    ├── icons/                   # Standalone SVG vector icons
    │   ├── github.svg
    │   ├── linkedin.svg
    │   ├── tryhackme.svg
    │   ├── shield.svg
    │   ├── terminal.svg
    │   ├── mail.svg
    │   └── download.svg
    ├── images/                  # OpenGraph preview cards and project media
    │   └── og-card.svg
    └── documents/
        └── resume.pdf           # Downloadable curriculum vitae (PDF)
```

---

## 🚀 How to Run Locally

Because this project is built entirely on native web standards, you do not need Node.js, Python, or web servers to run it.

### Method 1: Direct File Opening
Double-click `index.html` or right-click and choose **Open with > Chrome / Firefox / Edge / Safari**.

### Method 2: Local Static Server (Optional)
If you prefer running through a local development server:
```bash
# Using Python 3
python -m http.server 8000
# Then visit: http://localhost:8000
```
or with VS Code Live Server extension:
- Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 Step-by-Step GitHub Pages Deployment

Deploying your portfolio to GitHub Pages is fast and free. Follow these steps:

### 1. Initialize Git and Push to GitHub
If you haven't already initialized your repository:
```bash
cd d:\MyPortfolio
git init
git add .
git commit -m "Initial commit: Rohan Bankar Cybersecurity Portfolio"
git branch -M main
git remote add origin https://github.com/RohanBankar09/MyPortfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/RohanBankar09/MyPortfolio`.
2. Click on the **Settings** tab (gear icon at the top).
3. In the left sidebar, under **Code and automation**, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` from the dropdown, and keep the folder as `/(root)`.
5. Click **Save**.
6. Wait 1–2 minutes. GitHub Pages will build and deploy your site, providing your live URL:
   `https://rohanbankar09.github.io/MyPortfolio/`

---

## ✏️ Customization & Editing Guide

### 1. How to Replace Your Resume PDF
1. Export your official CV/resume as a PDF.
2. Name the file `resume.pdf`.
3. Copy or overwrite the file in the following path:
   ```text
   assets/documents/resume.pdf
   ```
4. When visitors click **"Download Resume"**, the website automatically delivers this file as `Rohan-Bankar-Cybersecurity-Resume.pdf`.

### 2. How to Edit Personal Information
All personal details are organized in `index.html`:
- **Name & Title**: Search for `ROHAN BANKAR` or `CYBERSECURITY PROFESSIONAL` in `index.html`.
- **Status Text**: Search for `AVAILABLE FOR CYBERSECURITY OPPORTUNITIES`. You can update this to your current job status.
- **Location**: Search for `Chh. Sambhajinagar, Maharashtra, India`.
- **Email**: Update instances of `iam.rohanbankar@gmail.com` in `index.html` and also at the top of `js/script.js` (`const EMAIL_ADDRESS = 'iam.rohanbankar@gmail.com';`).

### 3. How to Add or Update Projects
Projects are located in `index.html` inside the `<section id="projects">`:
- Duplicate or modify any `<article class="project-card">` block.
- Update the project number `PROJECT // 0X`, category, title, overview, objectives, tools, and methodology.
- Ensure the button's `aria-controls` attribute matches the expandable case study container `id`.

### 4. How to Add Screenshots / Assessment Reports
In `index.html`, inside each project's case study, there is an assessment evidence block:
```html
<div class="evidence-box">
  <div class="evidence-header">
    <span class="evidence-title">ASSESSMENT EVIDENCE &amp; FINDINGS</span>
    <span class="evidence-badge">LAB VALIDATED</span>
  </div>
  <div class="evidence-content">
    <code>[Add sanitized screenshots, findings, or assessment report]</code>
  </div>
</div>
```
To insert an image:
1. Place your sanitized screenshot in `assets/images/project-01-vuln.png`.
2. Replace the placeholder with:
   ```html
   <img src="./assets/images/project-01-vuln.png" alt="Sanitized SQL injection test finding" style="width: 100%; border-radius: 4px; margin-top: 10px;">
   ```

### 5. How to Add Certifications
Certifications are located in `<section id="certifications">`:
- Find `<div class="certs-grid">`.
- Copy one of the `<div class="cert-card">` cards, update the credential title, issuing organization, and credential number.

---

## 🔒 Content Integrity & Ethical Security Policy

- All external links point strictly to authorized profiles (GitHub, LinkedIn, TryHackMe).
- No simulated vulnerability statistics, fabricated CVSS scores, or unverified claims are included.
- All testing methodologies documented are explicitly stated as conducted in authorized, controlled lab environments (DVWA, TryHackMe, PortSwigger Web Security Academy).

---

## 📄 License & Attribution

Designed and engineered for **Rohan Bankar**. All rights reserved &copy; 2026.
Free for personal portfolio use and enhancement.
