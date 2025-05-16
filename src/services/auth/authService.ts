import { Auth } from 'aws-amplify';

// Check if the current user has admin role
export async function isUserAdmin(): Promise<boolean> {
  try {
    const user = await Auth.currentAuthenticatedUser();
    
    // Check for admin group in cognito:groups
    const groups = user.signInUserSession.accessToken.payload['cognito:groups'] || [];
    if (groups.includes('admin')) {
      return true;
    }
    
    // Alternatively, check for custom attribute
    const attributes = user.attributes || {};
    if (attributes['custom:role'] === 'admin') {
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

// Get current user's roles
export async function getUserRoles(): Promise<string[]> {
  try {
    const user = await Auth.currentAuthenticatedUser();
    
    // Get groups from token
    const groups = user.signInUserSession.accessToken.payload['cognito:groups'] || [];
    
    // Add custom role if exists
    const customRole = user.attributes?.['custom:role'];
    if (customRole && !groups.includes(customRole)) {
      groups.push(customRole);
    }
    
    return groups;
  } catch (error) {
    console.error('Error getting user roles:', error);
    return [];
  }
}