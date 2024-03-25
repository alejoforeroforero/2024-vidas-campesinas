import { Howl } from 'howler';

import s1 from '../../../assets/guaviare/jorge/jorge1.mp3';
import s2 from '../../../assets/guaviare/jorge/jorge2.mp3';
import s3 from '../../../assets/guaviare/jorge/jorge3.mp3';
import sCarlos1 from '../../../assets/guaviare/carlos/carlos1.mp3';
import sWilliam1 from '../../../assets/guaviare/william/william1.mp3';
import sWilliam2 from '../../../assets/guaviare/william/william2.mp3';

export const agregarS1 = () => {
    return new Howl({ src: s1 })
};

export const agregarS2 = () => {
    return new Howl({ src: s2 })
};

export const agregarS3 = () => {
    return new Howl({ src: s3 })
};

export const agregarS4 = () => {
    return new Howl({ src: sCarlos1 })
};

export const agregarS5 = () => {
    return new Howl({ src: sWilliam1 })
};

export const agregarS6 = () => {
    return new Howl({ src: sWilliam2 })
};