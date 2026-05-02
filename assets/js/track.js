/**
 * ANALYTICS & PIXEL HOOKS
 * Paste IDs when going live — events are no-ops if unset.
 */
(function () {
  'use strict';

  window.GA_MEASUREMENT_ID = window.GA_MEASUREMENT_ID || '';
  window.META_PIXEL_ID = window.META_PIXEL_ID || '';

  function loadGtag() {
    var id = window.GA_MEASUREMENT_ID;
    if (!id || !id.trim()) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', id);
  }

  function loadMetaPixel() {
    var pid = window.META_PIXEL_ID;
    if (!pid || !String(pid).trim()) return;
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', String(pid));
    window.fbq('track', 'PageView');
  }

  /**
   * @param {string} name snake_case preferred
   * @param {Record<string,string|number|boolean>} [payload]
   */
  window.trackEvent = function trackEvent(name, payload) {
    var meta = payload && typeof payload === 'object' ? payload : {};
    if (typeof console !== 'undefined' && console.debug)
      console.debug('[Pollygram track]', name, meta);

    if (typeof window.gtag === 'function' && window.GA_MEASUREMENT_ID) {
      window.gtag('event', name.replace(/-/g, '_'), meta);
    }
    if (typeof window.fbq === 'function' && window.META_PIXEL_ID) {
      window.fbq('trackCustom', name, meta);
    }
  };

  /** Image helpers for <picture> / onerror cascade */
  window.PollygramImg = {
    PLACEHOLDER: 'assets/images/placeholder.svg',
    onPictureImgError: function onPictureImgError(img) {
      if (!img || img.dataset.pgErrorHandled === '1') return;
      img.dataset.pgErrorHandled = '1';
      try {
        var pic = img.closest('picture');
        if (pic) {
          pic.querySelectorAll('source').forEach(function (s) {
            s.remove();
          });
        }
      } catch (e) {}
      var fb = img.getAttribute('data-fallback-src');
      if (fb && img.src.indexOf(fb) === -1) {
        img.removeAttribute('srcset');
        img.src = fb;
        return;
      }
      img.src = window.PollygramImg.PLACEHOLDER;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      loadGtag();
      loadMetaPixel();
    });
  } else {
    loadGtag();
    loadMetaPixel();
  }
})();
