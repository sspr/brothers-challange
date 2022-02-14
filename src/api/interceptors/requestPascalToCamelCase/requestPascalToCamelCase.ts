export const requestPascalToCamelCase = <TObject>(object: Record<string, any>): TObject => {
  const changeStringToCamelCase = (key: string) =>
    key
      .replace(/[^a-z0-9]{1,}./gi, (match) => match.toUpperCase().substring(match.length - 1))
      .replace(/.{1}/, (match) => match.toLowerCase());

  const keysTuCamelCase = (input: any): any => {
    if (typeof input === 'object' && !Array.isArray(input)) {
      return Object.fromEntries(
        Object.entries(input).map(([key, val]) => [
          changeStringToCamelCase(key),
          typeof val === 'object' ? keysTuCamelCase(val) : val,
        ]),
      );
    }

    if (typeof input === 'object' && Array.isArray(input)) {
      return input.map((element) => keysTuCamelCase(element));
    }

    return input;
  };

  return keysTuCamelCase(object);
};
