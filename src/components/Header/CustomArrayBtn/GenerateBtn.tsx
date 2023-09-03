import React from 'react';

// import { Button } from 'antd';

import { useArrayState, useArrayActions } from '../../../contexts';

const GenerateButton: React.FC = () => {
  const { validCustomArrayString } = useArrayState();
  const { replaceArray } = useArrayActions();

  return (
    <button
      // type="primary"
      className='ml-auto'
      onClick={replaceArray}
      disabled={!validCustomArrayString}
    >
      Generate
    </button>
  );
};

export default GenerateButton;
