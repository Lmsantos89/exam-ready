import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import AuthWrapper from '../components/AuthWrapper';

// Only attempt to configure Amplify if aws-exports exists
try {
  Amplify.configure(awsconfig);
} catch (error) {
  console.log('No AWS Amplify configuration found');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
}

export default MyApp;