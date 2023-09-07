import React from 'react';

// import { Layout, Space } from 'antd';

import PlayPauseButton from './PlayPauseButton';
import RefreshArrayButton from './RefreshArrayBtn';
import ArrayLengthSlider from './ArrayLengthSlider';
import FrequencySlider from './FrequencySlider';
import CustomArrayButton from './CustomArrayBtn';

const Header: React.FC = () => {
  return (
    <nav className='w-screen flex flex-col items-start justify-center h-[10%]' >
      <div className='w-full flex flex-row justify-start items-center gap-12 overflow-auto' >
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
