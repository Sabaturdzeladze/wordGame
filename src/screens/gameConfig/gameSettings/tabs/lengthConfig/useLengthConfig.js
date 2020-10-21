import { useContext } from 'react';

import GameSettingsContext from '../../../../../contexts/GameSettingsContext';

const useLengthConfig = () => {
  const {
    gameSettings: { length },
    changeSettings,
  } = useContext(GameSettingsContext);

  const lengthChangeHandler = dir => {
    let lengthToAdd = dir === 'incr' ? 5 : -5;
    changeSettings('length', length + lengthToAdd);
  };

  return {
    length,
    lengthChangeHandler,
  };
};

export default useLengthConfig;
