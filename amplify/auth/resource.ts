import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: undefined
  },
  userAttributes: {
    preferredUsername: {
      required: true,
      mutable: true
    }
  },
  multifactor: {
    mode: 'OPTIONAL',
    totp: false,
    sms: undefined
  },
  groups: ['admin']
});