export const capitalizeFirstLetter = (word: string) => {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalizedWord === 'Micha' ? 'Michał' : capitalizedWord;
};
