import { Dimensions, Platform } from 'react-native';

const designScreenWidth = 360;
const { width, height } = Dimensions.get('window');

export function generateAdjustedSize(fontSize) {
  if (Platform.isPad) {
    return fontSize;
  }
  return (parseInt(fontSize) * width) / 400;
}

export function generateAdjustedHeight(itemHeight, designScreenHeight = 760) {
  return (itemHeight * height) / designScreenHeight;
}

export function generateAdjustedWidth(itemWidth) {
  return (itemWidth * width) / designScreenWidth;
}
