import React from "react";
import VideoPlayer from "react-video-js-player";
import SlimeVideo from "./Video/SlimeRe.mp4";

const Slime = () => {
  const videoSrc = SlimeVideo;
  const poster =
    "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2021/01/That-Time-I-Got-Reincarnated-As-A-Slime-Season-2-Part-2-release-date-TenSura-sequel-confirmed-in-July-2021-1024x609.jpg?resize=780%2C464&ssl=1";

  return (
    <div className="anime-back-dit">
       <span className="anime-name">Rebirth Slime</span>
      <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" className="video-anime-edit" />
    </div>
  );
};

export default Slime;
