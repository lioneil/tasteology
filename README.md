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

## ✅ Quality Checks

### Automated Quality Assurance

The project includes comprehensive quality checks to ensure code standards, accessibility, and performance:

#### HTML Validation

```bash
npm run lint:html
```

- **Tool**: html-validate
- **Purpose**: Validates semantic HTML5 structure
- **Checks**: WCAG compliance, proper element usage, required attributes
- **Configuration**: `.htmlvalidate.json`

#### CSS Linting

```bash
npm run lint:css
```

- **Tool**: stylelint with stylelint-config-standard
- **Purpose**: Enforces CSS coding standards and best practices
- **Features**: Modern CSS syntax, accessibility rules, consistent formatting
- **Configuration**: `.stylelintrc.json`

#### JavaScript Linting

```bash
npm run lint:js
```

- **Tool**: ESLint with accessibility plugin
- **Purpose**: Enforces JavaScript best practices and accessibility
- **Features**: ES6+ support, accessibility rules, browser environment
- **Configuration**: `eslint.config.js`

#### Accessibility Testing

```bash
npm run lint:a11y    # axe-core automated testing
npm run a11y         # pa11y accessibility testing
```

- **Tools**: @axe-core/cli, pa11y
- **Purpose**: Automated accessibility compliance testing
- **Standards**: WCAG 2.1 AA compliance
- **Coverage**: Color contrast, ARIA usage, keyboard navigation, semantic structure

#### Performance Analysis

```bash
lighthouse http://localhost:4173 --output html --output-path ./lighthouse-report.html
```

- **Tool**: Lighthouse
- **Purpose**: Performance, accessibility, SEO, and best practices analysis
- **Metrics**: Core Web Vitals, accessibility score, SEO optimization

### Comprehensive Quality Check

```bash
npm run lint
```

Runs all quality checks in sequence:

1. HTML validation (`lint:html`)
2. CSS linting (`lint:css`)
3. JavaScript linting (`lint:js`)
4. Accessibility testing (`lint:a11y`)

### Pre-commit Quality Gates

The project is configured to maintain high code quality through:

- **Automated validation**: All commits should pass quality checks
- **Consistent formatting**: Enforced through stylelint and ESLint
- **Accessibility compliance**: Built-in WCAG 2.1 AA validation
- **Performance monitoring**: Regular Lighthouse audits recommended

### Quality Standards

#### Accessibility (WCAG 2.1 AA)

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1-h6)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Alt text for images
- ✅ Focus management

#### Performance

- ✅ Optimized assets (WebP images, multiple resolutions)
- ✅ Minified CSS and JavaScript
- ✅ Efficient CSS (no unused styles)
- ✅ Modern ES modules
- ✅ Responsive images

#### Code Standards

- ✅ Modular architecture (CSS and JS)
- ✅ Consistent naming conventions
- ✅ Meaningful comments
- ✅ Error-free validation
- ✅ Cross-browser compatibility

### Continuous Integration Ready

All quality checks are designed to integrate with CI/CD pipelines:

```yaml
# Example CI configuration
- name: Install dependencies
  run: npm ci

- name: Run quality checks
  run: npm run lint

- name: Build project
  run: npm run build

- name: Run accessibility tests
  run: npm run a11y
```

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
