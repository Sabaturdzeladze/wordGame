import React, { useMemo } from 'react';
import { View } from 'react-native';
import {
  generateAdjustedHeight,
  generateAdjustedSize,
  generateAdjustedWidth,
} from '../../utils/helpers/sizes';

const Box = ({
  children,
  row = false,
  width,
  height,
  center,
  centerHorizontal,
  centerVertical,
  p,
  ph,
  pv,
  pt,
  pr,
  pb,
  pl,
  m,
  mh,
  mv,
  mt,
  mr,
  mb,
  ml,
  style,
  round,
  bgc,
  full,
  radius,
  overflow,
}) => {
  const customStyles = useMemo(() => {
    const styles = {
      flexDirection: row ? 'row' : 'column',
    };
    if (height) {
      styles.height = height;
    }
    if (width) {
      styles.width = width;
    }
    if (center) {
      styles.justifyContent = 'center';
      styles.alignItems = 'center';
    }
    if (centerHorizontal) {
      if (!row) {
        styles.alignItems = 'center';
      } else {
        styles.justifyContent = 'center';
      }
    }
    if (centerVertical) {
      if (!row) {
        styles.justifyContent = 'center';
      } else {
        styles.alignItems = 'center';
      }
    }

    if (p) {
      styles.padding = generateAdjustedSize(p);
    }
    if (ph) {
      styles.paddingHorizontal = generateAdjustedWidth(ph);
    }
    if (pv) {
      styles.paddingVertical = generateAdjustedHeight(pv);
    }
    if (pt) {
      styles.paddingTop = generateAdjustedHeight(pt);
    }
    if (pr) {
      styles.paddingRight = generateAdjustedWidth(pr);
    }
    if (pb) {
      styles.paddingBottom = generateAdjustedHeight(pb);
    }
    if (pl) {
      styles.paddingLeft = generateAdjustedWidth(pl);
    }
    if (m) {
      styles.margin = generateAdjustedSize(m);
    }
    if (mh) {
      styles.marginHorizontal = mh;
    }
    if (mr) {
      styles.marginRight = generateAdjustedWidth(mr);
    }
    if (ml) {
      styles.marginLeft = generateAdjustedWidth(ml);
    }
    if (mv) {
      styles.marginVertical = generateAdjustedHeight(mv);
    }
    if (mt) {
      styles.marginTop = generateAdjustedHeight(mt);
    }
    if (mb) {
      styles.marginBottom = generateAdjustedHeight(mb);
    }
    if (round) {
      styles.borderRadius = height / 2;
    }
    if (bgc) {
      styles.backgroundColor = bgc;
    }
    if (full) {
      styles.flex = 1;
    }
    if (radius) {
      styles.borderRadius = radius;
    }
    if (overflow) {
      styles.overflow = overflow;
    }

    return styles;
  }, [
    row,
    width,
    height,
    center,
    p,
    ph,
    pv,
    pt,
    pr,
    pb,
    pl,
    m,
    mh,
    mv,
    mt,
    mr,
    mb,
    ml,
    centerHorizontal,
    centerVertical,
    round,
    bgc,
    full,
    radius,
    overflow,
  ]);

  return <View style={[customStyles, style]}>{children}</View>;
};

export default Box;
