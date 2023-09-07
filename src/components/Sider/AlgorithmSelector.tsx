import React from 'react';

// import { Select } from 'antd';

import * as algorithms from '../../algorithms/index';
type AlgorithmName = keyof typeof algorithms;

import { useAlgorithmState, useAlgorithmActions } from '../../contexts';
import camelCaseToCaseText from '../../utils/camelCaseToCaseText';

const AlgorithmSelector: React.FC = () => {
  const { selectedAlgorithm, algorithmNames } = useAlgorithmState();
  const { selectAlgorithm } = useAlgorithmActions();

  return (
    <select
      className="algorithm-selector w-full h-10 outline-none border-2 border-gray-400 rounded-lg"
      value={selectedAlgorithm}
      onChange={(e) => selectAlgorithm(e.target.value as AlgorithmName)}
    >
      {algorithmNames.map((name) => (
        <option value={name} key={name}>
          {camelCaseToCaseText(name)}
        </option>
      ))}
    </select>
  );
};

export default AlgorithmSelector;
