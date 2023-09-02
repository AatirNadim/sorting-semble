import shuffleArray from './shuffleArray';

export default function generateArrayOfLength(size: number) {
  const array = Array.from({ length: size }, (x, i) => i);

  return shuffleArray(array);
}
