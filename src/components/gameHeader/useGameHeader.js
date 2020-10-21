import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useContext, useMemo } from 'react';
import GameContext from '../../contexts/GameContext';
import GameSettingsContext from '../../contexts/GameSettingsContext';

const useGameHeader = () => {
  const navigation = useNavigation();
  const { gameSettings } = useContext(GameSettingsContext);
  const {
    game: { currentPlayer },
    roundFinish,
  } = useContext(GameContext);
  const [seconds, setSeconds] = useState(gameSettings.length);

  const timerPercentage = useMemo(() => {
    return (seconds * 100) / gameSettings.length;
  }, [gameSettings.length, seconds]);

  useEffect(() => {
    // eslint-disable-next-line curly
    if (seconds !== 0) return;
    roundFinish();
    navigation.pop();
  }, [seconds, roundFinish, navigation]);

  return {
    points: currentPlayer.roundPoints,
    setSeconds,
    secondsLeft: seconds,
    percentage: timerPercentage,
  };
};

export default useGameHeader;
