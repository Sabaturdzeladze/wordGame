import React from 'react';

import Box from '../../../../../components/box/Box';
import CustomText from '../../../../../components/customText/CustomText';
import Theme from '../../../../../utils/constants/theme';
import SettingsModifier from '../../../components/SettingsModifier';
import usePointsConfig from './usePointsConfig';

const PointsConfig = () => {
  const { points, pointsChangeHandler } = usePointsConfig();

  return (
    <Box full>
      <Box centerHorizontal mt={32}>
        <CustomText size={16} color={Theme.colorPrimary}>
          მოგებისთვის საჭირო ქულები
        </CustomText>
      </Box>

      <SettingsModifier value={points} setValue={pointsChangeHandler} />
    </Box>
  );
};

export default PointsConfig;
