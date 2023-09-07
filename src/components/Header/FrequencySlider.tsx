import React from 'react';

import ReactSlider from "react-slider";

import { useSortingActions, useSortingState } from '../../contexts';

const FrequencySlider: React.FC = () => {
  const { frequency } = useSortingState();
  const { changeFrequency } = useSortingActions();

  return (
    <div className='w-1/5 flex flex-col items-start justify-center gap-2 !cursor-default' >
      <div className=' font-semibold text-one' >Speed</div>
      <ReactSlider
        className="h-2 bg-red-500 w-full rounded-lg"
        trackClassName="h-2 bg-one rounded-lg"
        thumbClassName="bg-blue-500 h-6 w-6 rounded-full top-[-9px] bg-four cursor-pointer"
        value={frequency}
        min={1}
        max={120}
        onChange={changeFrequency}
      />
    </div>
  );
};

export default FrequencySlider;
