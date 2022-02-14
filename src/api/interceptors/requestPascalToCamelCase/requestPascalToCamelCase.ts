export const requestPascalToCamelCase = <TAnyObject, TObjectInCamelCase>(object: TAnyObject): TObjectInCamelCase => {
  const changeStringToCamelCase = (key: string) =>
    key
      .replace(/[^a-z0-9]{1,}./gi, (match) => match.toUpperCase().substring(match.length - 1))
      .replace(/.{1}/, (match) => match.toLowerCase());

  const keysTuCamelCase = (obj: any): any => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        changeStringToCamelCase(key),
        typeof val === 'object' && !Array.isArray(val)
          ? keysTuCamelCase(val)
          : Array.isArray(val)
          ? val.map((element) => keysTuCamelCase(element))
          : val,
      ]),
    );
  };

  return keysTuCamelCase(object);
};
