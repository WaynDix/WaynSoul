import React from "react";
import VideoPlayer from "react-video-js-player";
import OverVideo from "./Video/Overlord.mp4";

const Overlord = () => {
  const videoSrc = OverVideo;
  const poster =
    "https://nntheblog.b-cdn.net/wp-content/uploads/2022/04/Overlord-5.jpg";

  return (
    <div className="anime-back-dit">
       <span className="anime-name">Overlord</span>
      <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" className="video-anime-edit" />
    </div>
  );
};

export default Overlord;
