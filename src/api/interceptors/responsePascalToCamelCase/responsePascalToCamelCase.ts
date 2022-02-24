export const responsePascalToCamelCase = <TObject>(object: TObject) => {
  const changeStringToCamelCase = (key: string) =>
    key
      .replace(/[^a-z0-9]{1,}./gi, (match) => match.toUpperCase().substring(match.length - 1))
      .replace(/^.{1}/, (match) => match.toLowerCase())
      .replace(/[^a-z0-9]$/i, '');

  const keysToCamelCase = <TInput>(input: TInput): unknown => {
    if (input && typeof input === 'object' && !Array.isArray(input)) {
      return Object.fromEntries(
        Object.entries(input).map(([key, val]) => [changeStringToCamelCase(key), keysToCamelCase(val)]),
      );
    }

    if (Array.isArray(input)) {
      return input.map((element) => keysToCamelCase(element));
    }

    return input;
  };

  return keysToCamelCase<typeof object>(object);
};
