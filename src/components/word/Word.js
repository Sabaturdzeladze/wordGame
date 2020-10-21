import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import icons from '../../static/icons';
import Theme from '../../utils/constants/theme';
import Box from '../box/Box';
import CustomText from '../customText/CustomText';
import Icon from '../icon/Icon';

const Word = ({ word, changePoint }) => {
  const [wasPressed, setWasPressed] = useState(false);

  const togglePress = useCallback(() => {
    let point = 1;
    if (wasPressed) {
      point = -1;
    }

    changePoint(point);
    setWasPressed(p => !p);
  }, [changePoint, wasPressed]);

  return (
    <Box
      full
      center
      bgc="#fff"
      radius={16}
      style={[styles.wrapper, wasPressed && styles.selected]}
    >
      <TouchableOpacity style={styles.button} onPress={togglePress}>
        <CustomText size={18} color="#40454d">
          {word}
        </CustomText>
        {wasPressed && (
          <Box height="100%" style={styles.iconWrapper} center>
            <Icon source={icons.check} width={20} height={20} />
          </Box>
        )}
      </TouchableOpacity>
    </Box>
  );
};

export default Word;

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.7,
    elevation: 5,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 3 },
    position: 'relative',
  },
  selected: {
    borderColor: Theme.successColor,
    borderWidth: 1,
  },
  button: {
    flex: 1,
    padding: 8,
    overflow: 'hidden',
    width: '100%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    right: 16,
  },
});
