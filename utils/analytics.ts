export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

export const analyticsEvents = {
  PRODUCT_VIEW: 'product_view',
  CONTACT_FORM: 'contact_form_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  CATALOG_DOWNLOAD: 'catalog_download',
};