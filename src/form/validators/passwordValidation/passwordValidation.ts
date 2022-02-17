export const passwordValidation = (maxLength: number) => ({
  maxLength: {
    value: maxLength,
    message: 'login.password.error.maxLength',
  },
  required: {
    value: true,
    message: 'login.password.error.required',
  },
});
