import React, { useMemo } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { hasNotch } from 'react-native-device-info';

import Theme from '../../utils/constants/theme';

const LinearBackground = ({ children, primary, secondary }) => {
  const colors = useMemo(() => {
    let bgcColors = [];
    if (primary) {
      bgcColors.push(Theme.colorPrimaryAlternate, Theme.colorPrimary);
    } else if (secondary) {
      bgcColors.push(Theme.colorSecondaryAlternate, Theme.colorSecondary);
    } else {
      bgcColors.push('rgba(0,0,0,0)', 'rgba(0,0,0,0)');
    }
    return bgcColors;
  }, [primary, secondary]);

  const customStyle = useMemo(() => {
    if (hasNotch()) {
      return {
        paddingTop: 32,
      };
    }
    return {};
  }, []);
  return (
    <LinearGradient colors={colors} style={[styles.screen, customStyle]}>
      <StatusBar barStyle="light-content" />
      {children}
    </LinearGradient>
  );
};

export default LinearBackground;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
