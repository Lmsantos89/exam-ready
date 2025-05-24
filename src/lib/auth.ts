import { Auth } from 'aws-amplify';

// Sign up a new user
export async function signUp(email: string, password: string, name: string) {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        name
      }
    });
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}

// Confirm sign up with verification code
export async function confirmSignUp(email: string, code: string) {
  try {
    return await Auth.confirmSignUp(email, code);
  } catch (error) {
    console.error('Error confirming sign up:', error);
    throw error;
  }
}

// Sign in a user
export async function signIn(email: string, password: string) {
  try {
    const user = await Auth.signIn(email, password);
    return user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

// Sign out the current user
export async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

// Get the current authenticated user
export async function getCurrentUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Check if a user is authenticated
export async function isAuthenticated() {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch (error) {
    return false;
  }
}

// Get the current session
export async function getCurrentSession() {
  try {
    const session = await Auth.currentSession();
    return session;
  } catch (error) {
    console.error('Error getting current session:', error);
    return null;
  }
}

// Reset password
export async function resetPassword(email: string) {
  try {
    return await Auth.forgotPassword(email);
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
}

// Confirm new password with code
export async function confirmResetPassword(email: string, code: string, newPassword: string) {
  try {
    return await Auth.forgotPasswordSubmit(email, code, newPassword);
  } catch (error) {
    console.error('Error confirming new password:', error);
    throw error;
  }
}

// Change password for authenticated user
export async function changePassword(oldPassword: string, newPassword: string) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return await Auth.changePassword(user, oldPassword, newPassword);
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
}