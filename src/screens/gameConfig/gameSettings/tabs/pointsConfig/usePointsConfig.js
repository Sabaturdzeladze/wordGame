import { useContext } from 'react';

import GameSettingsContext from '../../../../../contexts/GameSettingsContext';

const usePointsConfig = () => {
  const {
    gameSettings: { points },
    changeSettings,
  } = useContext(GameSettingsContext);

  const pointsChangeHandler = dir => {
    let pointsToAdd = dir === 'incr' ? 5 : -5;
    changeSettings('points', points + pointsToAdd);
  };

  return {
    points,
    pointsChangeHandler,
  };
};

export default usePointsConfig;
