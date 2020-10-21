import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Theme from '../../utils/constants/theme';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomText from '../customText/CustomText';

const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };

const Button = ({
  children,
  title = '',
  style,
  danger,
  primary,
  secondary,
  color = '#fff',
  onPress = () => {},
  radius,
}) => {
  const customStyle = useMemo(() => {
    const styles = {};
    if (radius) {
      styles.borderRadius = radius;
    }
    return styles;
  }, [radius]);

  const colors = useMemo(() => {
    let bgcColors = [];
    if (primary) {
      bgcColors.push(Theme.colorPrimary, Theme.colorPrimaryAlternate);
    } else if (secondary) {
      bgcColors.push(Theme.colorSecondary, Theme.colorSecondary);
    } else if (danger) {
      bgcColors.push('#e0291b', '#e0291b');
    } else {
      bgcColors.push('rgba(0,0,0,0)', 'rgba(0,0,0,0)');
    }
    return bgcColors;
  }, [primary, secondary, danger]);

  return (
    <TouchableOpacity
      style={[styles.button, customStyle, style]}
      onPress={onPress}
    >
      <LinearGradient
        start={start}
        end={end}
        colors={colors}
        style={[styles.gradient, customStyle]}
      >
        {title ? <CustomText color={color}>{title}</CustomText> : children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.5,
    elevation: 5,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 8 },
  },
  gradient: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
