import getYoutubeId from "@/app/utils/get-youtubeId";
import { BiLogoYoutube } from "react-icons/bi";
import YoutubeIframe from "./YoutubeIframe";
import { PreviewProps } from "sanity";

interface PropType extends PreviewProps {
  url?: string;
}

export function YoutubeWidget({ url }: PropType) {
  const id = getYoutubeId(url);
  return (
    <div className="p-3">
      {url ? (
        <YoutubeIframe videoId={id} />
      ) : (
        <div className="flex items-center justify-center gap-x-2">
          <BiLogoYoutube className="text-[red] text-lg" />
          <span>Add YouTube URL</span>
        </div>
      )}
    </div>
  );
}
