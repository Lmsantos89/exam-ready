// Mock auth service for local development

// Check if the current user has admin role
export async function isUserAdmin(): Promise<boolean> {
  // For local development, always return true to enable admin features
  return true;
}

// Get current user's roles
export async function getUserRoles(): Promise<string[]> {
  // For local development, return admin role
  return ['admin'];
}