import React, { useEffect } from 'react';

import { SortingPoints } from '../../utils/types';

import Bar from './Bar';

import ValueMapper from '../../utils/valueMapper';

type Props = {
  array: number[];
  points: SortingPoints;
};

const ArrayCanvas: React.FC<Props> = ({ array, points }) => {
  const minBarHeight = 5;
  const maxBarHeight = 100;

  const minVal = Math.min(...array);
  const maxVal = Math.max(...array);

  const heightMapper = ValueMapper(
    [minVal, maxVal],
    [minBarHeight, maxBarHeight]
  );

  useEffect(() => {
    console.log('array changed --> \n\n', array)
  }, [array])

  return (
    <div className="visualizer-canvas flex flex-row h-full overflow-auto w-full gap-2 justify-around bg-one px-2  ">
      {array.map((nr, index) => (
        <Bar key={nr} height={heightMapper(nr) + '%'} color={points[index]} />
      ))}
    </div>
  );
};

export default ArrayCanvas;
