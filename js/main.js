/**
 * Tasteology - Main JavaScript Entry Point
 *
 * This file serves as the main entry point for all JavaScript functionality.
 * It imports and initializes the gallery and cards modules.
 */

import { initializeGallery } from './gallery.js';
import { initializeCards } from './cards.js';

/**
 * Initialize the application
 */
function init() {
  // Initialize components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeGallery();
      initializeCards();
    });
  } else {
    // DOM is already ready
    initializeGallery();
    initializeCards();
  }
}

// Start the application
init();