import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import Box from '../../components/box/Box';
import CustomText from '../../components/customText/CustomText';
import LinearBackground from '../../components/linearBackground/LinearBackground';
import GameContext from '../../contexts/GameContext';

const WinnerScreen = () => {
  const { winner } = useContext(GameContext);

  return (
    <LinearBackground primary>
      <Box full center>
        <CustomText>The winner iiiiisssss... {winner?.name}</CustomText>
      </Box>
    </LinearBackground>
  );
};

export default WinnerScreen;

const styles = StyleSheet.create({});
