import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);

export const trackEvent = (event, properties) => {
  if (process.env.NODE_ENV === 'production') {
    mixpanel.track(event, properties);
  } else {
    console.log('Track Event', event, properties);
  }
};

export default mixpanel;
