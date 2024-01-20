export function readTime(words: string) {
  // Remove whitespaces
  const trimString = words.trim();

  // Split the string into an array of words using spaces as the delimiter
  const wordsArray = trimString.split(/\s+/);
  const wordCount = wordsArray.length;

  const avgReadTime: number = 185;
  return `${(wordCount / avgReadTime).toFixed(0)} min`;
}
