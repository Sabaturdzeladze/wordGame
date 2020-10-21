import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Theme from '../../utils/constants/theme';
import Box from '../box/Box';
import Button from '../button/Button';

const DeletableInput = ({
  value,
  index,
  setValue,
  deleteInput,
  isDeletable,
}) => {
  return (
    <Box row centerVertical>
      <Box style={styles.wrapper} mr={8} height={40}>
        <TextInput
          value={value}
          maxLength={25}
          autoCorrect={false}
          style={styles.input}
          onChangeText={setValue}
          // clearButtonMode="always"
          placeholder={`მოთამაშე ${index + 1}`}
          placeholderTextColor="#ccc"
        />
      </Box>
      {isDeletable && (
        <Box height={30} width={30}>
          <Button danger title="x" radius={30} onPress={deleteInput} />
        </Box>
      )}
    </Box>
  );
};

export default DeletableInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    paddingHorizontal: 8,
    color: Theme.colorPrimary,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: Theme.colorPrimary,
  },
});
