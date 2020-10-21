import React from 'react';

import Header from '../../components/header/Header';
import LinearBackground from '../../components/linearBackground/LinearBackground';
import GameSettings from './gameSettings/GameSettings';

const GameConfig = () => {
  return (
    <LinearBackground primary>
      <Header />

      <GameSettings />
    </LinearBackground>
  );
};

export default GameConfig;
