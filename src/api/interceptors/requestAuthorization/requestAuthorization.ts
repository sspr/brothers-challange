export const requestAuthorization = <TConfig>(config: TConfig, headers: TConfig, bearer: string | null) => ({
  ...config,
  headers: { ...headers, Authorization: `Bearer ${bearer}` },
});
