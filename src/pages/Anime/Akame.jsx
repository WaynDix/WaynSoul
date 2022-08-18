import React from "react";
import VideoPlayer from "react-video-js-player";
import AkameVideo from "./Video/AkameGaKill.mp4";

const Akame = () => {
  const videoSrc = AkameVideo;
  const poster =
    "https://akamai.sscdn.co/uploadfile/letras/fotos/4/6/0/2/46023547f21fe5445e6b61ac25bbfaaf.jpg";

  return (
    <div className="anime-back-dit">
      <span className="anime-name">Akame Ga Kill</span>
      <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" className="video-anime-edit" />
    </div>
  );
};

export default Akame;
