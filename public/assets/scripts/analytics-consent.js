(function () {
  const measurementId = 'G-9KR3W0VV4H';
  const storageKey = 'brain_analytics_consent';
  const loadAnalytics = () => {
    if (window.__brainAnalyticsLoaded) return;
    window.__brainAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);
  };
  const setConsent = (value) => {
    localStorage.setItem(storageKey, value);
    if (value === 'granted') loadAnalytics();
    const banner = document.getElementById('analytics-consent');
    if (banner) banner.hidden = true;
  };
  const showBanner = () => {
    const banner = document.getElementById('analytics-consent');
    if (banner) banner.hidden = false;
  };
  const saved = localStorage.getItem(storageKey);
  if (saved === 'granted') loadAnalytics();
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.createElement('aside');
    banner.id = 'analytics-consent';
    banner.className = 'analytics-consent';
    banner.hidden = Boolean(saved);
    banner.innerHTML = '<p>We use Google Analytics only with your permission to understand site usage and improve Brain.</p><div><button type="button" data-consent="granted">Allow analytics</button><button type="button" data-consent="denied">Decline</button><a href="/privacy-policy/">Privacy Policy</a></div>';
    document.body.appendChild(banner);
    banner.addEventListener('click', (event) => {
      const choice = event.target.closest('[data-consent]');
      if (choice) setConsent(choice.dataset.consent);
    });
    const settings = document.createElement('button');
    settings.type = 'button';
    settings.className = 'analytics-settings';
    settings.textContent = 'Privacy settings';
    settings.addEventListener('click', showBanner);
    document.body.appendChild(settings);
  });
})();
