import getYoutubeId from "@/app/utils/get-youtubeId";
import { BiLogoYoutube } from "react-icons/bi";
import YoutubeIframe from "../shared/YoutubeIframe";

export function YoutubeWidget(props: any) {
  const { url, actions, schemaType } = props;
  const id = getYoutubeId(url);

  return (
    <div className="pt-1 relative">
      {url ? (
        <>
          {props.renderDefault(props)}
          <YoutubeIframe videoId={id} />
        </>
      ) : (
        <div className="flex items-center justify-center gap-x-2 my-3">
          <BiLogoYoutube className="text-[red] text-lg" />
          <span>Add YouTube URL</span>
        </div>
      )}
    </div>
  );
}
