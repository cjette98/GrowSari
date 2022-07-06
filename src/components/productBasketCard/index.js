import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../constant/theme';

const ProductCartCard = ({ data }) => {
  const { display_name, price, qty } = data;
  const total = price * qty;
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.productLabel}>{display_name}</Text>
      <View style={styles.totalRow}>
        <Text>{` ₱${price} x ${qty}`}</Text>
        <Text style={styles.total}>Total: ₱{total}</Text>
      </View>
    </View>
  );
};

export default ProductCartCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  totalRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  total: {
    color: COLOR.PRIMARY,
    fontWeight: '700',
  },
  productLabel: {
    fontWeight: '700',
    fontSize: 16,
  },
});
