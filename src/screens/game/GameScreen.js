import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';

import Box from '../../components/box/Box';
import Button from '../../components/button/Button';
import CustomText from '../../components/customText/CustomText';
import Header from '../../components/header/Header';
import LinearBackground from '../../components/linearBackground/LinearBackground';
import GameContext from '../../contexts/GameContext';
import { CLASSIC_GAME, WINNER_SCREEN } from '../../utils/constants/screens';

const GameScreen = () => {
  const navigation = useNavigation();
  const {
    game: { round, currentPlayer, isFinished },
  } = useContext(GameContext);

  useEffect(() => {
    if (isFinished) {
      navigation.reset({
        index: 0,
        routes: [{ name: WINNER_SCREEN }],
      });
    }
  }, [isFinished, navigation]);

  return (
    <LinearBackground primary>
      <Header />

      {isFinished ? (
        <></>
      ) : (
        <>
          <Box mt={32} mh={16} radius={8} bgc="#fff" center height={400}>
            <Box center>
              <Box mb={8}>
                <CustomText size={18} primary>
                  რაუნდი {round}
                </CustomText>
              </Box>
              <CustomText size={18} primary>
                {currentPlayer?.name}
              </CustomText>
            </Box>
            <Box mt={24} height={50} width={200} round overflow="hidden">
              <Button primary onPress={() => navigation.push(CLASSIC_GAME)}>
                <CustomText size={20} color="#fff">
                  დაწყება
                </CustomText>
              </Button>
            </Box>
          </Box>

          <Box height={50} mh={16} mt={32}>
            <Button secondary>
              <CustomText size={20} color="#fff">
                ანგარიში
              </CustomText>
            </Button>
          </Box>
        </>
      )}
    </LinearBackground>
  );
};

export default GameScreen;
