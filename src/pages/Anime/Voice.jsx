import React from "react";
import VideoPlayer from "react-video-js-player";
import VoiceVideo from "./Video/VoiceForm.mp4";

const Voice = () => {
  const videoSrc = VoiceVideo;
  const poster =
    "https://static.okko.tv/images/v2/9755402?scale=1&quality=80";

  return (
    <div className="anime-back-dit">
       <span className="anime-name">Voice Form</span>
      <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" className="video-anime-edit" />
    </div>
  );
};

export default Voice;
