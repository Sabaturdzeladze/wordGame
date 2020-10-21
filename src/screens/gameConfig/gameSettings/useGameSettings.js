import { useCallback, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import GameContext from '../../../contexts/GameContext';

import { GAME } from '../../../utils/constants/screens';
import GameSettingsContext from '../../../contexts/GameSettingsContext';

const useGameSettings = () => {
  const navigation = useNavigation();
  const { startGame } = useContext(GameContext);
  const { areSettingsValid } = useContext(GameSettingsContext);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const startGameHandler = useCallback(() => {
    if (!areSettingsValid()) {
      return setActiveTabIndex(2);
    }
    startGame();
    navigation.push(GAME);
  }, [startGame, navigation, areSettingsValid]);

  return {
    activeTabIndex,
    startGameHandler,
    setActiveTabIndex,
  };
};

export default useGameSettings;
