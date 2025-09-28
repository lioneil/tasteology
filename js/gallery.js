/**
 * Gallery Block JavaScript
 *
 * Handles gallery modal functionality, image display, and accessibility features.
 */

/**
 * Initialize the gallery component
 */
export function initializeGallery() {
  const modal = document.querySelector('.gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeButton = document.querySelector('.gallery-modal-close');
  const overlay = document.querySelector('.gallery-modal-overlay');
  const imageButtons = document.querySelectorAll('.gallery-image-btn');

  if (!modal || !modalImage || !closeButton || !overlay) {
    console.warn('Gallery modal elements not found');
    return;
  }

  // Handle image button clicks
  imageButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const img = button.querySelector('.gallery-image');
      if (img) {
        openModal(img.src, img.alt);
      }
    });

    // Add keyboard support for buttons
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const img = button.querySelector('.gallery-image');
        if (img) {
          openModal(img.src, img.alt);
        }
      }
    });
  });

  // Close modal handlers
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  /**
   * Open the modal with an image
   * @param {string} src - Image source URL
   * @param {string} alt - Image alt text
   */
  function openModal(src, alt) {
    // Get the higher resolution source for modal display
    modalImage.src = src.replace('.webp', '@2x.webp');
    modalImage.alt = alt;
    modalCaption.textContent = alt;

    modal.setAttribute('aria-hidden', 'false');

    // Make close button focusable when modal is open
    closeButton.setAttribute('tabindex', '0');

    // Trigger the animation by adding the class
    modal.classList.add('is-open');

    // Focus the close button for accessibility after animation starts
    window.setTimeout(() => closeButton.focus(), 150);

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;
  }

  /**
   * Close the modal
   */
  function closeModal() {
    // Start the close animation
    modal.classList.remove('is-open');

    // Wait for animation to complete before hiding completely
    window.setTimeout(() => {
      modal.setAttribute('aria-hidden', 'true');

      // Make close button non-focusable when modal is closed
      closeButton.setAttribute('tabindex', '-1');

      // Reset image source to prevent flash of previous image
      modalImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ii8+PC9zdmc+';
      modalImage.alt = '';
      modalCaption.textContent = '';

      // Restore background scrolling and position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }

      // Return focus to the last clicked image button
      const activeButton = document.querySelector('.gallery-image-btn:focus');
      if (activeButton) {
        activeButton.focus();
      }
    }, 300); // Match the CSS transition duration
  }

  console.log('Gallery module initialized with modal functionality');
}
