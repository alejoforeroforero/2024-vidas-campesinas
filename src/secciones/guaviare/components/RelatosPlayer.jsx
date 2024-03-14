import { useState } from 'react';
import { Howl } from 'howler';

import s1 from '../../../assets/guaviare/jorge/jorge1.mp3';
import s2 from '../../../assets/guaviare/jorge/jorge2.mp3';
import s3 from '../../../assets/guaviare/jorge/jorge3.mp3';

export const crearAudioPlayer = () => {
    const [sounds] = useState([
        new Howl({ src: s1 }),
        new Howl({ src: s2 }),
        new Howl({ src: s3 }),
    ]);
    return sounds;
};

