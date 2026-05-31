import posthog from 'posthog-js';

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

let analyticsReady = false;

export function initAnalytics() {
  if (!POSTHOG_KEY || analyticsReady) return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    person_profiles: 'identified_only',
  });

  analyticsReady = true;
}

export function trackEvent(eventName: string, properties?: Record<string, string | number | boolean>) {
  if (!analyticsReady) return;
  posthog.capture(eventName, properties);
}
