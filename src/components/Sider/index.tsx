import React from 'react';

// import { Layout } from 'antd';

import AlgorithmSelector from './AlgorithmSelector';
import AlgorithmEditor from './AlgorithmEditor';



import { useWindowSize } from '../../hooks';

const Sider: React.FC = () => {
  const [windowWidth] = useWindowSize();

  const siderTriggerWidth = 36;
  const smallWidth = windowWidth - siderTriggerWidth * 2;
  const bigWidth = 400;
  const siderWidth = Math.min(smallWidth, bigWidth);

  return (
    <div className='w-[20%] flex flex-col justify-start gap-4 pt-4 overflow-auto h-full' >
      <AlgorithmSelector />
      <AlgorithmEditor />
    </div>

  );
};

export default Sider;
