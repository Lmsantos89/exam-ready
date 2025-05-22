# ExamReady

AI-powered certification exam preparation platform.

## Development Environments

### Local Development (Dev)

For local development without AWS resources:

```bash
# Install dependencies
npm install

# Run the development server with mock services
npm run dev:mock
```

This uses mock data and services for local development without requiring AWS resources.

### Staging Environment

For the staging environment with real AWS resources:

```bash
# Switch to staging environment
amplify env checkout staging

# Deploy resources
amplify push -y

# Run with staging configuration
NEXT_PUBLIC_APP_ENV=staging npm run dev
```

### Production Environment

For the production environment with real AWS resources:

```bash
# Switch to production environment
amplify env checkout production

# Deploy resources
amplify push -y

# Build for production
NEXT_PUBLIC_APP_ENV=production npm run build
```

## Project Structure

- `/src/components` - React components
- `/src/pages` - Next.js pages
- `/src/services` - Service functions for API calls
- `/src/mocks` - Mock data for local development
- `/src/config` - Environment-specific configurations
- `/src/lib` - Utility functions and libraries
- `/src/graphql` - GraphQL queries, mutations, and subscriptions