<div align="center">

# 💻 Rachit Srivastava
[![Netlify Status](https://api.netlify.com/api/v1/badges/d0b33349-765b-47e1-9809-58a25f12186a/deploy-status)](https://rachit-srivastava.netlify.app/)

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=06B6D4&center=true&vCenter=true&width=600&lines=Computer+Science+%40+Arizona+State+University;Cybersecurity+%7C+Reverse+Engineering;Building+Secure%2C+Scalable+Systems" alt="Animated Typing text" />

**[View Live Portfolio: rachit-srivastava.netlify.app](https://rachit-srivastava.netlify.app/)**

</div>

---

## 🚀 The Architecture: How I Built This
This portfolio is not a standard template; it is a custom-engineered web application designed to demonstrate my understanding of modern frontend architecture, performance optimization, and CI/CD workflows.

### 🛠 The Tech Stack
<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</div>

### 🧠 Engineering Decisions
1. **Server-Side Rendering (SSR) via Next.js:** Chosen to ensure fast load times and optimal SEO, proving I understand how to build for the modern web beyond basic single-page applications (SPAs).
2. **Decoupled Data Architecture:** Instead of hardcoding UI elements, I built strict **TypeScript interfaces** (e.g., `ISocialLinkItem`, `IProjectItem`) and decoupled the data into scalable configuration files. This allows me to update my portfolio instantly without rewriting React components.
3. **Scroll-Triggered Motion Design:** Integrated **Framer Motion** to engineer complex, terminal-style typing effects and entrance animations that trigger dynamically via `whileInView` observers, creating a highly engaging user experience.
4. **Public API Asset Pipeline:** Bypassed heavy local image hosting by dynamically fetching high-fidelity vector icons from public APIs (Iconify/Devicon). This keeps the repository lightweight while maintaining a premium aesthetic.
5. **Automated CI/CD:** Migrated and configured a continuous deployment pipeline using **Netlify**. Every code push to the `main` branch automatically resolves dependencies, handles build-time linting, and deploys to production.

---

## 🛡️ About Me & Expertise
I am an undergraduate at Arizona State University pursuing a **B.S. in Computer Science with a concentration in Cybersecurity**. My core interest lies in the intersection of low-level systems and security. 

When I am not serving as an Undergraduate Teaching Assistant for CSE 240 or coordinating residential life as a Community Assistant, I am diving into:
* **Offensive Security:** Reverse Engineering, Binary Exploitation, Web Security (SQLi, XSS).
* **Systems Level Programming:** C, C++, x86 & MIPS Assembly.
* **Hardware/Software Integration:** Digital Logic, Verilog, and Microprocessor Architecture.

---

## ⚡ Featured Engineering Projects

### 🔬 4-Bit Microprocessor Architecture
* **Stack:** Verilog, Hardware Description Logic
* **Details:** Designed, simulated, and documented a fully functional 4-bit microprocessor architecture from the ground up, alongside a synchronous traffic light system. This project required strict adherence to digital logic fundamentals and state machine optimization.

### 🤖 Autonomous Navigation Robot (PID Controller)
* **Stack:** MATLAB, LEGO MINDSTORMS
* **Details:** Engineered an autonomous robotic system utilizing a custom Proportional-Integral-Derivative (PID) controller. Bridged hardware execution with complex software control loops to achieve precise, real-time spatial navigation.

---

## 📊 GitHub Analytics
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=srivastavaarachit&show_icons=true&theme=radical&hide_border=true" alt="Rachit's GitHub Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=srivastavaarachit&layout=compact&theme=radical&hide_border=true" alt="Top Languages" />
</div>

---

## 📂 Run This Code Locally
To inspect the codebase or run the Next.js development server:

```bash
# 1. Clone the repository
git clone [https://github.com/srivastavaarachit/my-portfolio.git](https://github.com/srivastavaarachit/my-portfolio.git)

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
