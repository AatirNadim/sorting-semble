import React from 'react';

// import { Modal } from 'antd';

import ArrayInput from './ArrayInput';
import GenerateButton from './GenerateBtn';
import { MdClose } from 'react-icons/md'

type Props = {
  visible: boolean;
  hide: () => void;
};

const ArrayModal: React.FC<Props> = ({ visible, hide }) => {
  return (
    // <Modal
    //   visible={visible}
    //   onCancel={hide}
    //   footer={<GenerateButton />}
    //   title="Enter custom Array"
    // >
    //   <ArrayInput />
    // </Modal>
    <div className={`fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-black bg-opacity-50 ${visible ? '' : 'hidden'} `}>
      <div className="relative z-20 w-1/2 p-6 bg-white rounded-md flex flex-col gap-4  border-4 border-three">
        <div className='absolute right-3 top-3 p-4 rounded-full bg-gray-100 transition hover:bg-gray-400 flex justify-center items-center cursor-pointer'
        onClick={hide}>
          <MdClose size={'20px'} className = 'text-gray-600'/>
        </div>
        <div className='font-semibold text-lg'> Enter Custom Array</div>
        <ArrayInput  />
        <div className='w-full'>
          <GenerateButton  />
        </div>
      </div>
    </div>
  );
};

export default ArrayModal;
