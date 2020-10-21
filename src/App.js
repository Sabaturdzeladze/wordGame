import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './navigation/AppNavigation';
import { GameSettingsProvider } from './contexts/GameSettingsContext';
import { GameProvider } from './contexts/GameContext';

const App = () => {
  return (
    <NavigationContainer>
      <GameSettingsProvider>
        <GameProvider>
          <AppNavigation />
        </GameProvider>
      </GameSettingsProvider>
    </NavigationContainer>
  );
};

export default App;
