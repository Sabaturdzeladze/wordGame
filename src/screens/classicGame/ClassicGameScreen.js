import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import Box from '../../components/box/Box';
import GameHeader from '../../components/gameHeader/GameHeader';
import LinearBackground from '../../components/linearBackground/LinearBackground';
import Word from '../../components/word/Word';
import useClassicGame from './useClassicGame';

const { width } = Dimensions.get('window');

const ClassicGameScreen = () => {
  const { increasePoints, words } = useClassicGame();

  return (
    <LinearBackground primary>
      <Box mt={24} mh={16} mb={128}>
        <GameHeader points={20} time={40} />
      </Box>

      <Box
        bgc="#fefefe"
        width={3 * width}
        height={3 * width}
        radius={1.45 * width}
        style={styles.contentWrapper}
        overflow="hidden"
        centerVertical
        centerHorizontal
      >
        <Box full mt={40}>
          {words?.map(word => (
            <Box key={word} height={60} mb={16} width={width - 64}>
              <Word word={word} changePoint={increasePoints} />
            </Box>
          ))}
        </Box>
      </Box>
    </LinearBackground>
  );
};

export default ClassicGameScreen;

const styles = StyleSheet.create({
  contentWrapper: {
    alignSelf: 'center',
  },
  wordsWrapper: {
    alignSelf: 'flex-start',
  },
});
