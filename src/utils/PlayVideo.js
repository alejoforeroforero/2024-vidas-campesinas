import { useState } from "react";

const PlayVideo = (id) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const playIt = (videoId) => {
    if (currentVideo !== videoId) {
      if (currentVideo) {
        const prevVideo = document.getElementById(currentVideo);
        prevVideo.pause();
      }
      setCurrentVideo(videoId);
      const video = document.getElementById(videoId);
      video.play();
    }
  };
};

export default PlayVideo;
