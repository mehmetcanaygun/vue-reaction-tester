export const randomFromMinMax = (min: number, max: number): number => {
  return Math.round(
    Math.random() * (max - min) + min
  );
};
