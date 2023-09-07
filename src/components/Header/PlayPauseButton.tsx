import React from 'react';

// import { Button } from 'antd';

import { useStatusState, useStatusActions } from '../../contexts';

const PlayPauseButton: React.FC = () => {
  const { isPlaying } = useStatusState();
  const { play, pause } = useStatusActions();

  return (
    <button
    className='bg-four text-one px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-four-hover transition'

      onClick={() => {
        isPlaying ? pause() : play();
      }}
    >
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPauseButton;
