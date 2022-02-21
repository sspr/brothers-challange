export const requestAuthCheck = (config: any, bearer: string | null) => {
  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${bearer}` },
  };
};
