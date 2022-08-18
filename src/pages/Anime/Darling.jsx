import React from "react";
import VideoPlayer from "react-video-js-player";
import Franxx from "./Video/Franxx.mp4";

const Darling = () => {
  const videoSrc = Franxx;
  const poster =
    "https://cutewallpaper.org/21/darling-in-the-franxx-4k-wallpaper/Darling-In-The-Franxx-Short-Intro-Live-Wallpaper-DesktopHut.jpg";

  return (
    <div className="anime-back-dit">
      <span className="anime-name">Darling in the Franxx</span>
      <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" className="video-anime-edit" />
    </div>
  );
};

export default Darling;
