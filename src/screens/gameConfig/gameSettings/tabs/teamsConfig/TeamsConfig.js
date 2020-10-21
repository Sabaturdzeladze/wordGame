import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Box from '../../../../../components/box/Box';
import Button from '../../../../../components/button/Button';
import CustomText from '../../../../../components/customText/CustomText';
import DeletableInput from '../../../../../components/deletableInput/DeletableInput';
import Theme from '../../../../../utils/constants/theme';
import { generateAdjustedSize } from '../../../../../utils/helpers/sizes';
import useTeamsConfig from './useTeamsConfig';

const TeamsConfig = () => {
  const {
    teams,
    changePlayerName,
    modifyTeamLength,
    isInvalid,
  } = useTeamsConfig();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Box centerHorizontal mv={32}>
        <CustomText
          size={16}
          color={Theme.colorPrimary}
          style={isInvalid && styles.errorText}
        >
          შეავსეთ მოთამაშეების სახელები
        </CustomText>
      </Box>

      <ScrollView>
        <Box full mh={16}>
          {teams?.map((player, index) => {
            return (
              <Box key={player.id} mb={8}>
                <DeletableInput
                  index={index}
                  value={player?.name}
                  isDeletable={index > 1}
                  deleteInput={() => modifyTeamLength(index)}
                  setValue={value => changePlayerName(index, value)}
                />
              </Box>
            );
          })}
        </Box>
      </ScrollView>

      <Box height={50} pb={8} pr={8}>
        <Box
          full
          round
          width={50}
          height={50}
          overflow="hidden"
          style={styles.buttonWrapper}
        >
          <Button title="+" primary onPress={() => modifyTeamLength(-1)} />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default TeamsConfig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    alignSelf: 'flex-end',
  },
  errorText: {
    fontSize: generateAdjustedSize(18),
    textDecorationLine: 'underline',
    color: Theme.colorSecondary,
  },
});
