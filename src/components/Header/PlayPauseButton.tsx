import React from 'react';

// import { Button } from 'antd';

import { useStatusState, useStatusActions } from '../../contexts';

const PlayPauseButton: React.FC = () => {
  const { isPlaying } = useStatusState();
  const { play, pause } = useStatusActions();

  return (
    <button
      onClick={() => {
        isPlaying ? pause() : play();
      }}
    >
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default PlayPauseButton;
