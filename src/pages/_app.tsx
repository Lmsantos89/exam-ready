import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AuthWrapper from '../components/AuthWrapper';
import '../lib/amplifyConfig'; // Import the Amplify configuration

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </div>
  );
}

export default MyApp;