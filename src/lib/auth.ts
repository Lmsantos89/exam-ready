import { signUp as amplifySignUp, confirmSignUp as amplifyConfirmSignUp } from 'aws-amplify/auth';
import { signIn as amplifySignIn, signOut as amplifySignOut } from 'aws-amplify/auth';
import { getCurrentUser as amplifyGetCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import { resetPassword as amplifyResetPassword, confirmResetPassword as amplifyConfirmResetPassword } from 'aws-amplify/auth';
import { updatePassword } from 'aws-amplify/auth';

// Sign up a new user
export async function signUp(email: string, password: string, name: string) {
  try {
    const { userId, nextStep } = await amplifySignUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          name
        }
      }
    });
    return { userId, nextStep };
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}

// Confirm sign up with verification code
export async function confirmSignUp(email: string, code: string) {
  try {
    return await amplifyConfirmSignUp({
      username: email,
      confirmationCode: code
    });
  } catch (error) {
    console.error('Error confirming sign up:', error);
    throw error;
  }
}

// Sign in a user
export async function signIn(email: string, password: string) {
  try {
    const { nextStep } = await amplifySignIn({
      username: email,
      password
    });
    return nextStep;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

// Sign out the current user
export async function signOut() {
  try {
    await amplifySignOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

// Get the current authenticated user
export async function getCurrentUser() {
  try {
    const user = await amplifyGetCurrentUser();
    const attributes = await fetchUserAttributes();
    return { ...user, attributes };
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Check if a user is authenticated
export async function isAuthenticated() {
  try {
    await amplifyGetCurrentUser();
    return true;
  } catch (error) {
    return false;
  }
}

// Get the current session
export async function getCurrentSession() {
  try {
    const session = await fetchAuthSession();
    return session;
  } catch (error) {
    console.error('Error getting current session:', error);
    return null;
  }
}

// Reset password
export async function resetPassword(email: string) {
  try {
    return await amplifyResetPassword({
      username: email
    });
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
}

// Confirm new password with code
export async function confirmResetPassword(email: string, code: string, newPassword: string) {
  try {
    return await amplifyConfirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword
    });
  } catch (error) {
    console.error('Error confirming new password:', error);
    throw error;
  }
}

// Change password for authenticated user
export async function changePassword(oldPassword: string, newPassword: string) {
  try {
    return await updatePassword({
      oldPassword,
      newPassword
    });
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
}