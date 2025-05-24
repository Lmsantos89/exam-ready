import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../lib/amplifyConfig'; // Import Amplify configuration

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Any app initialization can go here
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;