import { fetchAuthSession } from 'aws-amplify/auth';

export async function getCurrentUser() {
  try {
    const { tokens } = await fetchAuthSession();
    return tokens;
  } catch (err) {
    console.error('Not authenticated', err);
    return null;
  }
}

export async function isAuthenticated() {
  try {
    const { tokens } = await fetchAuthSession();
    return !!tokens;
  } catch (err) {
    return false;
  }
}