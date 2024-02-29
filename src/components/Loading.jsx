import React from 'react';
import LoadingIcons from 'react-loading-icons';

import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
        <LoadingIcons.ThreeDots stroke="#888" fill="666"/>
    </div>
  )
}

export default Loading