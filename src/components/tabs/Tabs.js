import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Theme from '../../utils/constants/theme';
import Box from '../box/Box';
import CustomText from '../customText/CustomText';

const Tab = ({ name, isActive }) => {
  return (
    <Box ph={16} pv={8} style={styles.tab}>
      <CustomText color={Theme.colorPrimary} size={17}>
        {name}
      </CustomText>
      {isActive && (
        <Box height={3} radius={2} style={styles.activeTabBorder} bgc={Theme.colorPrimary} />
      )}
    </Box>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Box row bgc="#f7f7f7">
      <ScrollView horizontal>
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(index)}
              style={styles.tabWrapper}
            >
              <Tab name={tab} isActive={index === activeTab} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabWrapper: {
    flex: 1,
  },
  tab: {
    position: 'relative',
  },
  activeTabBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
