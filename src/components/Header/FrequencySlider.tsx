import React from 'react';

import ReactSlider from "react-slider";

import { useSortingActions, useSortingState } from '../../contexts';

const FrequencySlider: React.FC = () => {
  const { frequency } = useSortingState();
  const { changeFrequency } = useSortingActions();

  return (
    <div>
      Speed
      <ReactSlider
        className="h-8 bg-red-500 w-1/4"
        trackClassName="h-8"
        thumbClassName="bg-blue-500 h-8 w-8 rounded-full top-[-6px]"
        value={frequency}
        min={1}
        max={120}
        onChange={changeFrequency}
      />
    </div>
  );
};

export default FrequencySlider;
