export const emailValidation = (maxLength: number) => ({
  maxLength: {
    value: maxLength,
    message: 'login.email.error.maxLength',
  },
  required: {
    value: true,
    message: 'login.email.error.required',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'login.email.error.pattern',
  },
});
