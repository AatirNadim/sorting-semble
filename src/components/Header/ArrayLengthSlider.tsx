import React from "react";

import ReactSlider from "react-slider";

import { useArrayState, useArrayActions } from '../../contexts';


const ArrayLengthSlider = () => {
  const { arrayLength } = useArrayState();
  const { setArrayLength } = useArrayActions();

  return (
    <div>
      <div>Size</div>
      <ReactSlider
        className="h-8 bg-red-500 w-1/4"
        trackClassName="h-8"
        thumbClassName="bg-blue-500 h-8 w-8 rounded-full top-[-6px]"
        min={0}
        max={300}
        value={arrayLength}
        onChange={setArrayLength}
      />
    </div>
  );
};

export default ArrayLengthSlider;
