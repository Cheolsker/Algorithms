export const getRandomNumsArray = (
  length: number,
  min: number,
  max: number
) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};
