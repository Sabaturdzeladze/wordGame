import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Box from '../../components/box/Box';
import Button from '../../components/button/Button';
import CustomText from '../../components/customText/CustomText';
import Logo from '../../components/logo/Logo';
import { GAME_CONFIG } from '../../utils/constants/screens';
import ScreenLayout from '../ScreenLayout';

const HomeScreen = () => {
  const navigation = useNavigation();

  const startGameHandler = () => {
    navigation.push(GAME_CONFIG);
  };

  return (
    <ScreenLayout>
      <Box full center>
        <Logo />

        <Box center mt={32}>
          <CustomText size={32} primary>
            Game Title
          </CustomText>
          <CustomText size={16} secondary>
            never ending fun
          </CustomText>
        </Box>
      </Box>

      <Box height={48} mh={56}>
        <Button title="START NEW GAME" primary radius={12} onPress={startGameHandler} />
      </Box>
    </ScreenLayout>
  );
};

export default HomeScreen;
