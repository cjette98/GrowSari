import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LABELS } from '../../constant/theme';
const Header = ({ screen, left }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{LABELS.PRODUCTS_LIST}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    height: 42,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: '700',
  },
});
