// Google Tag Manager Analytics Utility
// This file provides helper functions to track events in your React application

// Initialize dataLayer if it doesn't exist
window.dataLayer = window.dataLayer || [];

/**
 * Push an event to Google Tag Manager
 * @param {string} event - The event name
 * @param {object} data - Additional data to send with the event
 */
export const trackEvent = (event, data = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data
    });
  }
};

/**
 * Track page views for React Router
 * @param {string} page - The page name/path
 */
export const trackPageView = (page) => {
  trackEvent('page_view', {
    page_title: page,
    page_location: window.location.href
  });
};

/**
 * Track button clicks
 * @param {string} buttonName - Name of the button
 * @param {string} location - Where the button is located
 */
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location
  });
};

/**
 * Track roadmap section interactions
 * @param {string} sectionName - Name of the roadmap section
 * @param {string} action - Action performed (view, click, etc.)
 */
export const trackRoadmapInteraction = (sectionName, action) => {
  trackEvent('roadmap_interaction', {
    section_name: sectionName,
    action: action
  });
};

/**
 * Track tech stack interactions
 * @param {string} techName - Name of the technology
 * @param {string} action - Action performed (view, click, etc.)
 */
export const trackTechInteraction = (techName, action) => {
  trackEvent('tech_interaction', {
    tech_name: techName,
    action: action
  });
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {boolean} success - Whether the submission was successful
 */
export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  });
};

/**
 * Track scroll depth
 * @param {number} percentage - Scroll percentage (0-100)
 */
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage
  });
};

/**
 * Track time on page
 * @param {number} seconds - Time spent on page in seconds
 */
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', {
    time_seconds: seconds
  });
};

// Export default for convenience
export default {
  trackEvent,
  trackPageView,
  trackButtonClick,
  trackRoadmapInteraction,
  trackTechInteraction,
  trackFormSubmission,
  trackScrollDepth,
  trackTimeOnPage
};
