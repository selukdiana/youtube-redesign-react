import { NextVideos } from "../../components/NextVideos";
import { Video } from "../../components/Video";
import "./VideoPage.css";
export const VideoPage = () => {
  return (
    <main className="video-page">
      <div className="container">
        <div className="video-page__content">
          <Video />
          <NextVideos />
        </div>
      </div>
    </main>
  );
};
