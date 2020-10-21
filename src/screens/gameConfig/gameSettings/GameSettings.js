import React from 'react';
import { StyleSheet } from 'react-native';

import Box from '../../../components/box/Box';
import Button from '../../../components/button/Button';
import Tabs from '../../../components/tabs/Tabs';
import LengthConfig from './tabs/lengthConfig/LengthConfig';
import PointsConfig from './tabs/pointsConfig/PointsConfig';
import TeamsConfig from './tabs/teamsConfig/TeamsConfig';
import useGameSettings from './useGameSettings';

const tabs = ['ქულები', 'ხანგრძლივობა', 'გუნდები'];

const GameSettings = () => {
  const {
    activeTabIndex,
    startGameHandler,
    setActiveTabIndex,
  } = useGameSettings();

  return (
    <Box full mh={16}>
      <Box mt={32} radius={8} bgc="#fff">
        <Box radius={8} style={styles.contentWrapper}>
          <Tabs
            tabs={tabs}
            activeTab={activeTabIndex}
            setActiveTab={setActiveTabIndex}
          />

          <Box height={400}>
            {activeTabIndex === 0 && <PointsConfig />}
            {activeTabIndex === 1 && <LengthConfig />}
            {activeTabIndex === 2 && <TeamsConfig />}
          </Box>
        </Box>
      </Box>

      <Box height={50} mt={12} row>
        <Box full mr={8}>
          <Button title="Classic" secondary onPress={startGameHandler} />
        </Box>
        <Box full>
          <Button title="Arcade" secondary onPress={startGameHandler} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    overflow: 'hidden',
  },
});

export default GameSettings;
