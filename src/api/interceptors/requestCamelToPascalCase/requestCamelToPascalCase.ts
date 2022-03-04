export const requestCamelToPascalCase = <TObject>(object: TObject) => {
  const changeStringToPascalCase = (key: string) =>
    key.replace(/[a-ząęóśżźćńł]{1}[A-ZĄĘÓŚŻŹĆŃŁ]{1}/g, (match) => `${match[0]}_${match[1].toLowerCase()}`);

  const valuesToPascalCase = <TInput>(input: TInput): unknown => {
    if (input && typeof input === 'object' && !Array.isArray(input)) {
      return Object.fromEntries(
        Object.entries(input).map(([key, val]) => [
          key,
          typeof val === 'string' ? changeStringToPascalCase(val) : valuesToPascalCase(val),
        ]),
      );
    }

    if (Array.isArray(input)) {
      return input.map((element) =>
        valuesToPascalCase(typeof element === 'string' ? valuesToPascalCase(element) : element),
      );
    }

    return typeof input === 'string' ? valuesToPascalCase(input) : input;
  };

  return valuesToPascalCase<typeof object>(object);
};
