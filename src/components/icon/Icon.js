import React, { useMemo } from 'react';
import { Image } from 'react-native';

const Icon = ({ source, width, height, ...rest }) => {
  const customStyles = useMemo(() => {
    const styles = {};
    if (width) {
      styles.width = width;
    }
    if (height) {
      styles.height = height;
    }
    return styles;
  }, [width, height]);

  return (
    <Image
      source={source}
      resizeMode="contain"
      style={customStyles}
      {...rest}
    />
  );
};

export default Icon;
