import { useState, useEffect } from 'react';
import { Howl } from 'howler';

import s1 from '../../../assets/guaviare/jorge/jorge1.mp3';

export const crearAudioPlayer = () => {
    const [sounds] = useState([
        new Howl({ src: s1 }),
    ]);

    return sounds;

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
};

