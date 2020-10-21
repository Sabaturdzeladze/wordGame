import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import {
  CLASSIC_GAME,
  GAME,
  GAME_CONFIG,
  HOME,
  WINNER_SCREEN,
} from '../utils/constants/screens';
import GameConfig from '../screens/gameConfig/GameConfig';
import GameScreen from '../screens/game/GameScreen';
import ClassicGameScreen from '../screens/classicGame/ClassicGameScreen';
import WinnerScreen from '../screens/winnerScreen/WinnerScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={GAME_CONFIG}
        component={GameConfig}
        options={{
          headerShown: false,
          // headerTitle: '',
          // headerBackTitleVisible: false,
          // headerStyle: {
          //   elevation: 0,
          //   shadowOpacity: 0,
          // },
          // headerBackImage: BackIcon,
        }}
      />
      <Stack.Screen
        name={GAME}
        component={GameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={CLASSIC_GAME}
        component={ClassicGameScreen}
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name={WINNER_SCREEN}
        component={WinnerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
