import React from "react";
import VideoPlayer from "react-video-js-player";
import SlayerVideo from "./Video/DemonSlayer.mp4";

const Kimetsu = () => {
  const videoSrc = SlayerVideo;
  const poster =
    "https://d3fd5j8wprxn3h.cloudfront.net/wp-content/uploads/2021/09/demonslayer.jpg";

  return (
    <div className="anime-back-dit">
       <span className="anime-name">Kimetsu no yaiba</span>
      <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" className="video-anime-edit" />
    </div>
  );
};

export default Kimetsu;
