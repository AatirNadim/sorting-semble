import React from 'react';

// import { Layout, Space } from 'antd';

import PlayPauseButton from './PlayPauseButton';
import RefreshArrayButton from './RefreshArrayBtn';
import ArrayLengthSlider from './ArrayLengthSlider';
import FrequencySlider from './FrequencySlider';
import CustomArrayButton from './CustomArrayBtn';

const Header: React.FC = () => {
  return (
    <nav className='w-screen flex flex-row items-center justify-start h-[10%] bg-three px-4 py-2 gap-4 overflow-auto ' >
      <div className='font-bold text-4xl text-one' >Sorting Semble</div>
      <div className='flex-grow flex flex-row justify-end items-center gap-20 overflow-auto h-full ' >
        <PlayPauseButton />
        <RefreshArrayButton />
        <CustomArrayButton />
        <ArrayLengthSlider />
        <FrequencySlider />
      </div>
    </nav>
  );
};

export default Header;
