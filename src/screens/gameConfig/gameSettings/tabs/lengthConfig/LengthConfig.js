import React from 'react';

import Box from '../../../../../components/box/Box';
import CustomText from '../../../../../components/customText/CustomText';
import Theme from '../../../../../utils/constants/theme';
import SettingsModifier from '../../../components/SettingsModifier';
import useLengthConfig from './useLengthConfig';

const LengthConfig = () => {
  const { length, lengthChangeHandler } = useLengthConfig();

  return (
    <Box full>
      <Box centerHorizontal mt={32}>
        <CustomText size={16} color={Theme.colorPrimary}>
          რაუნდის ხანგრძლივობა
        </CustomText>
      </Box>

      <SettingsModifier value={length} setValue={lengthChangeHandler} />
    </Box>
  );
};

export default LengthConfig;
