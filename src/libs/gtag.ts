export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  });
};

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID as string, {
    page_path: url,
  });
};
