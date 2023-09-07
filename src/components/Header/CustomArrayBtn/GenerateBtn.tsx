import React from 'react';

// import { Button } from 'antd';

import { useArrayState, useArrayActions } from '../../../contexts';

const GenerateButton: React.FC = () => {
  const { validCustomArrayString } = useArrayState();
  const { replaceArray } = useArrayActions();

  return (
    <button
      // type="primary"
      className='ml-auto bg-four text-one px-4 py-2 rounded-md font-semibold cursor-pointer
        hover:bg-four-hover transition
      '
      onClick={replaceArray}
      disabled={!validCustomArrayString}
    >
      Generate
    </button>
  );
};

export default GenerateButton;
