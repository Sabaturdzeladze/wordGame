import React from 'react';
import { StyleSheet } from 'react-native';

import Box from '../box/Box';

const Logo = () => {
  return (
    <Box center>
      <Box row centerHorizontal mb={8}>
        <Box width={90} height={90} round bgc="#e9e8e7" mr={8} />
        <Box width={60} height={60} round bgc="#323c58" style={styles.end} />
      </Box>

      <Box row centerHorizontal mb={8}>
        <Box width={60} height={60} round bgc="#8d4f9e" mr={4} />
        <Box width={32} height={32} round bgc="#58c4c5" mr={4} style={styles.center} mt={8} />
        <Box width={52} height={52} round bgc="#f16a5a" mr={4} style={styles.end} />
        <Box width={17} height={17} round bgc="#f16a5a" style={styles.end} mb={6} />
      </Box>

      <Box width={32} height={32} round bgc="#f16a5a" mr={32} />
    </Box>
  );
};

export default Logo;

const styles = StyleSheet.create({
  center: {
    alignSelf: 'center',
  },
  end: {
    alignSelf: 'flex-end',
  },
});
