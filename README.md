# Tasteology - Frontend Development Assessment

A vanilla HTML/CSS/JS implementation of a design mockup featuring a Gallery Block and Cards Block. This project demonstrates production-quality frontend development skills without relying on frameworks or utility libraries.

## 🎯 Project Overview

This project implements a [Zeplin design](https://zpl.io/JQOEee6) as part of a Frontend Development skill assessment. The focus is on creating clean, maintainable, CMS-ready code that faithfully reproduces the design while meeting modern web standards.

### Design Reference

- **Zeplin Design**: <https://zpl.io/JQOEee6>

## 🏗️ Architecture

- **Framework**: None (Vanilla HTML/CSS/JS)
- **Build Tool**: Vite (without framework)
- **Styling**: Custom CSS (no Tailwind or utility frameworks)
- **Images**: WebP format with multiple resolutions (@1x, @2x, @3x)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run accessibility checks
npm run a11y

# Run all linting and validation
npm run lint
```

## 📋 Features

### Gallery Block

- **Image Modal**: Click any image to open in a modal/popup
- **Keyboard Support**: ESC key closes modal
- **Accessibility**: ARIA roles and proper focus management
- **Responsive**: Optimized layouts for all screen sizes

### Cards Block ("Taste the Colours")

- **Link Tracking**: All link clicks logged to console
- **Semantic HTML**: Proper `<a>` tags with valid href attributes
- **Standards Compliant**: Follows industry best practices for external links

## 🎨 Design Requirements

- **Responsive Design**: Works from 320px mobile to desktop
- **Browser Support**: Latest Chrome, Firefox, Edge
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO Optimized**: Semantic HTML, proper meta tags, heading hierarchy

## 🛠️ Development Standards

### Code Quality

- Modular CSS and JS organization
- Meaningful comments for complex logic
- Consistent naming conventions
- Production-ready asset optimization

### CMS Readiness

- Content structured for easy CMS integration
- Modular component architecture
- Semantic HTML that maps to CMS fields
- Minimal hardcoded content

## 🧪 Testing & Validation

The project includes automated checks for:

- **Accessibility**: axe-core, pa11y
- **HTML Validation**: html-validate
- **CSS Quality**: stylelint
- **Performance**: Lighthouse CI

## 📁 Project Structure

```bash
/
├── index.html          # Main HTML file
├── css/               # Modular CSS files
├── js/                # JavaScript modules
├── assets/            # Optimized images (WebP, multiple resolutions)
├── README.md          # This file
```

## 🎯 Evaluation Criteria

This project is evaluated on:

- **Design Fidelity**: Accuracy to Zeplin mockup
- **Code Quality**: Clean, maintainable, future-proof structure
- **Requirements**: Meeting all functional specifications
- **Standards**: Following web best practices
- **Production Ready**: Professional quality and optimization

## 🔗 Links

- **Live Demo**: [To be added after deployment]
- **Repository**: [Current repository]
- **Design Reference**: <https://zpl.io/JQOEee6>

---

*This project demonstrates vanilla web development skills for CMS template creation without relying on frameworks or utility libraries.*
