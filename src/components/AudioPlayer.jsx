import { useState } from 'react';
import { Howl } from 'howler';

import s1 from '../assets/guaviare/jorge/jorge2.mp3';
import s2 from '../assets/guaviare/jorge/jorge3.mp3';

const AudioPlayer = () => {
  const [sounds] = useState([
    new Howl({ src: s1 }),
    new Howl({ src: s2 }),
  ]);

  const playAllSounds = () => {
    debugger;
    sounds.forEach((sound) => {
      sound.play();
    });
  };

//   const loadNewSound = (src) => {

//     const newSound = new Howl({
//       src: [src],
//       onplay: () => setIsPlaying(true),
//       onpause: () => setIsPlaying(false),
//       onend: () => setIsPlaying(false)
//     });
//     setSound(newSound);
//     setIsPlaying(false);
//   };

  return (
    <div>
      <button onClick={playAllSounds}>Play All Sounds</button>
    </div>
  );
};

export default AudioPlayer;