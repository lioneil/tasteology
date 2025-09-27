/**
 * Cards Block JavaScript
 *
 * Handles link click tracking and logging for the Cards Block.
 */

/**
 * Initialize the cards component
 */
export function initializeCards() {
  const cardLinks = document.querySelectorAll('.card-link');

  if (!cardLinks.length) {
    console.warn('No card links found');
    return;
  }

  // Add click event listeners to all card links
  cardLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      // Log the anchor element to console as required
      console.log('Card link clicked:', link);

      // Log additional useful information for debugging
      console.log('Link details:', {
        href: link.href,
        cardIndex: index,
        cardTitle: link.querySelector('.card-title')?.textContent || 'Unknown',
        target: link.target,
        timestamp: new Date().toISOString()
      });
    });

    // Add keyboard support for accessibility
    link.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        // Space key should trigger click for links
        if (event.key === ' ') {
          event.preventDefault();
          link.click();
        }
      }
    });
  });

  console.log(`Cards module initialized with ${cardLinks.length} card links`);
}