import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import formatInThousands from '../../utils/formatInThousands';

const styles = StyleSheet.create({
  countItem: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
});

const CountItem = ({ label, count, testID }) => {
  return (
    <View style={styles.countItem}>
      <Text style={styles.countItemCount} fontWeight="bold" testID={testID}>
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default CountItem;
