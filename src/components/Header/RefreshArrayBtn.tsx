import React from "react";

// import { Button } from 'antd';

import { useArrayActions } from "../../contexts";

const RefreshArrayButton: React.FC = () => {
  const { refreshArray } = useArrayActions();

  return <button 
  className='bg-four text-one px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-four-hover transition'
  onClick={refreshArray}>New Array</button>;
};

export default RefreshArrayButton;
