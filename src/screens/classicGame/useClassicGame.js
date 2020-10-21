import { useCallback, useContext, useEffect, useState } from 'react';

import GameContext from '../../contexts/GameContext';

const useClassicGame = () => {
  const {
    increasePoints,
    game: { words },
  } = useContext(GameContext);

  return {
    increasePoints,
    words,
  };
};

export default useClassicGame;
