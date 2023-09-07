import React, { useEffect } from 'react';

// import { Input } from 'antd';

import { useArrayState, useArrayActions } from '../../../contexts';

const ArrayInput: React.FC = () => {
  const { customArrayString } = useArrayState();
  const { setCustomArrayString } = useArrayActions();

  useEffect(() => {
    console.log('current array ,', customArrayString)
  }, [customArrayString])

  return (
    <input
      className='h-12 overflow-auto outline-none border-gray-400 border-4 rounded-md p-4 font-semibold'
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
