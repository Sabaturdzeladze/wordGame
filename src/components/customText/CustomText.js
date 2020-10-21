import React, { useMemo } from 'react';
import { Text } from 'react-native';

import Theme from '../../utils/constants/theme';
import {
  generateAdjustedHeight,
  generateAdjustedSize,
} from '../../utils/helpers/sizes';

const CustomText = ({
  children,
  size = 14,
  spacing,
  lineHeight,
  color,
  opacity,
  primary = false,
  secondary = false,
  style,
}) => {
  const customStyle = useMemo(() => {
    const styles = {
      fontSize: generateAdjustedSize(size),
      color: color ? color : '#000',
      opacity: opacity ? opacity : 1,
    };

    if (spacing) {
      styles.letterSpacing = spacing;
    }
    if (lineHeight) {
      styles.lineHeight = generateAdjustedHeight(lineHeight);
    }
    if (secondary) {
      styles.color = Theme.textColorSecondary;
    }
    if (primary) {
      styles.color = Theme.textColorPrimary;
    }
    return styles;
  }, [size, spacing, lineHeight, color, opacity, primary, secondary]);

  return <Text style={[customStyle, style]}>{children}</Text>;
};

export default CustomText;
