import React from 'react';

import icons from '../../static/icons';
import Box from '../box/Box';
import Icon from '../icon/Icon';

const BackIcon = () => {
  return (
    <Box pl={12}>
      <Icon source={icons.back} width={20} />
    </Box>
  );
};

export default BackIcon;
