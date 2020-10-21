import React from 'react';

import Box from '../../../components/box/Box';
import Button from '../../../components/button/Button';
import CustomText from '../../../components/customText/CustomText';
import Theme from '../../../utils/constants/theme';

const SettingsModifier = ({ value, setValue }) => {
  return (
    <Box full center>
      <Box row mh={32}>
        <Box width={50} height={50} bgc={Theme.colorPrimary} round>
          <Button onPress={setValue}>
            <CustomText color="#fff" size={20}>
              -
            </CustomText>
          </Button>
        </Box>
        <Box full center bgc={Theme.colorPrimary} mh={8} radius={8}>
          <CustomText color="#fff" size={32}>
            {value}
          </CustomText>
        </Box>
        <Box width={50} height={50} bgc={Theme.colorPrimary} round>
          <Button onPress={() => setValue('incr')}>
            <CustomText color="#fff" size={20}>
              +
            </CustomText>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsModifier;
