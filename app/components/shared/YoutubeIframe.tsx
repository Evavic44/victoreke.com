export default function YoutubeIframe({ videoId }: { videoId: string | null }) {
  if (!videoId) {
    return null;
  }
  return (
    <iframe
      className="aspect-video"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
