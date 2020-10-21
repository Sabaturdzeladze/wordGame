import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Theme from '../../utils/constants/theme';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Box from '../box/Box';
import CustomText from '../customText/CustomText';
import { useNavigation } from '@react-navigation/native';
import useGameHeader from './useGameHeader';

let interval = null;

const GameHeader = () => {
  const navigation = useNavigation();
  const { percentage, secondsLeft, setSeconds, points } = useGameHeader();

  useEffect(() => {
    interval = setInterval(() => {
      setSeconds(p => p - 1);
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(interval);
    }
  }, [secondsLeft]);

  return (
    <Box row height={50} style={styles.wrapper} centerVertical>
      <Box
        width={60}
        height={60}
        bgc={Theme.gameSecondaryColor}
        center
        radius={16}
      >
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <CustomText size={25} color="#fff">
            x
          </CustomText>
        </TouchableOpacity>
      </Box>

      <Box>
        <AnimatedCircularProgress
          size={60}
          width={2}
          fill={percentage}
          tintColor="#fff"
          // onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#f4856c"
          rotation={360}
        >
          {() => (
            <Box full center bgc={Theme.gamePrimaryColor} width="100%">
              <CustomText size={20} color="#fff">
                {secondsLeft}
              </CustomText>
            </Box>
          )}
        </AnimatedCircularProgress>
      </Box>

      <Box
        width={60}
        height={60}
        bgc={Theme.gameSecondaryColor}
        center
        radius={16}
      >
        <TouchableOpacity style={styles.button}>
          <Box mb={4}>
            <CustomText size={16} color="#fff">
              ქულა
            </CustomText>
          </Box>
          <CustomText size={12} color="#fff">
            {points}
          </CustomText>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default GameHeader;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
