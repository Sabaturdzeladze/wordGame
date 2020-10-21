import React, { useCallback, useState } from 'react';
import { DEFAULT_SETTINGS } from '../utils/constants/gameSettings';

const GameSettingsContext = React.createContext(null);

export default GameSettingsContext;

export const GameSettingsProvider = ({ children }) => {
  const [gameSettings, setGameSettings] = useState(DEFAULT_SETTINGS);

  const onGameSettingsChange = useCallback((key, value) => {
    if (value <= 5 || value >= 500) {
      return;
    }

    setGameSettings(p => ({
      ...p,
      [key]: value,
    }));
  }, []);

  const areSettingsValid = useCallback(() => {
    const filteredTeams = gameSettings?.teams?.filter(team => !!team.name);
    const isValid = filteredTeams.length >= 2;
    setGameSettings(p => ({
      ...p,
      isValid,
    }));
    return isValid;
  }, [gameSettings.teams]);

  const state = {
    gameSettings,
    areSettingsValid,
    changeSettings: onGameSettingsChange,
  };

  return (
    <GameSettingsContext.Provider value={state}>
      {children}
    </GameSettingsContext.Provider>
  );
};
