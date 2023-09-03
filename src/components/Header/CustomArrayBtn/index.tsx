import React from "react";

// import { Button } from 'antd';

import ArrayModal from "./ArrayModal";

import { useModal } from "../../../hooks";

const CustomArrayButton: React.FC = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>Custom Array</button>
      <ArrayModal visible={isShowing} hide={toggle} />
    </>
  );
};

export default CustomArrayButton;
