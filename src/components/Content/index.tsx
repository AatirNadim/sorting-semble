import React from 'react';

// import { Layout } from 'antd';

import Visualizer from './Visualizer';

const Content: React.FC = () => {
  return (
    <div className='w-[80%] h-full overflow-auto' >
      <Visualizer />
    </div>
  );
};

export default Content;
