import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { trackEvent } from '../lib/mixpanelClient';

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			// Track page view event
			trackEvent('Page Viewed', { page: url });
		};

		// Track the initial page load
		trackEvent('Page Viewed', { page: router.pathname });

		// Subscribe to route changes to track page views
		router.events.on('routeChangeComplete', handleRouteChange);

		// Unsubscribe from the event with the cleanup function
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events, router.pathname]);

	return <Component {...pageProps} />;
}
