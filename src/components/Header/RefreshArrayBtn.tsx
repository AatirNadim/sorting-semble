import React from "react";

// import { Button } from 'antd';

import { useArrayActions } from "../../contexts";

const RefreshArrayButton: React.FC = () => {
  const { refreshArray } = useArrayActions();

  return <button onClick={refreshArray}>New Array</button>;
};

export default RefreshArrayButton;
