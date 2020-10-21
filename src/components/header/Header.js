import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import icons from '../../static/icons';
import Box from '../box/Box';
import Icon from '../icon/Icon';

const Header = () => {
  const navigation = useNavigation();

  return (
    <Box ph={16} pv={8}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backBtn}>
        <Icon source={icons.back} height={20} width={20} />
      </TouchableOpacity>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  backBtn: {
    width: 20,
  },
});
