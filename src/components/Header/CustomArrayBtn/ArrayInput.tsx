import React from 'react';

// import { Input } from 'antd';

import { useArrayState, useArrayActions } from '../../../contexts';

const ArrayInput: React.FC = () => {
  const { customArrayString } = useArrayState();
  const { setCustomArrayString } = useArrayActions();

  return (
    <input
      className='h-4 overflow-auto outline-none border-2 border-gray-400 rounded-md'
      placeholder="1,2,3,4,5,6"
      value={customArrayString}
      onChange={(e) => {
        const val = e.target.value;
        setCustomArrayString(val);
      }}
    />
  );
};

export default ArrayInput;
