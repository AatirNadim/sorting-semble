import React from "react";

// import { Button } from 'antd';

import ArrayModal from "./ArrayModal";

import { useModal } from "../../../hooks";

const CustomArrayButton: React.FC = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button 
        className='bg-four text-one px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-four-hover transition'
      onClick={toggle}>Custom Array</button>
      <ArrayModal visible={isShowing} hide={toggle} />
    </>
  );
};

export default CustomArrayButton;
