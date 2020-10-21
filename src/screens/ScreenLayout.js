import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenLayout = ({ children, barColor = '#fff', backgroundColor = '#fff' }) => {
  const customStyle = {
    backgroundColor,
  };

  return (
    <SafeAreaView style={[styles.container, customStyle]}>
      <StatusBar backgroundColor={barColor} barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
});
