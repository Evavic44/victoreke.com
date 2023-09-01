export function readTime({ words }: { words: string }) {
  const avgReadTime: number = 185;
  return `${(words.length / avgReadTime).toFixed(0)} min`;
}
