export default function getYoutubeId(url: any) {
  const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  const match = regex.exec(url);

  if (!match) {
    return null;
  }
  return match[3];
}
