export const responsePascalToCamelCase = <TObject>(object: TObject) => {
  const changeStringToCamelCase = (key: string) =>
    key
      .replace(/[^a-z0-9ąęóśżźćńł:/?=\\.-\s]{1,}./gi, (match) => match.toUpperCase().substring(match.length - 1))
      .replace(/[^a-z0-9ąęóśżźćńł:/?=\\.-\s]$/i, '');

  const keysToCamelCase = <TInput>(input: TInput): unknown => {
    if (input && typeof input === 'object' && !Array.isArray(input)) {
      return Object.fromEntries(
        Object.entries(input).map(([key, val]) => [
          changeStringToCamelCase(key),
          typeof val === 'string' ? changeStringToCamelCase(val) : keysToCamelCase(val),
        ]),
      );
    }

    if (Array.isArray(input)) {
      return input.map((element) =>
        keysToCamelCase(typeof element === 'string' ? changeStringToCamelCase(element) : element),
      );
    }

    return typeof input === 'string' ? changeStringToCamelCase(input) : input;
  };

  return keysToCamelCase<typeof object>(object);
};
