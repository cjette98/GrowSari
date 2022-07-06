import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { COLOR, LABELS } from '../../constant/theme';
import { useSelector } from 'react-redux';
import ProductCartCard from '../../components/productBasketCard';

const Cart = () => {
  const cartItem = useSelector((state) => state.allCart.products);

  const OverallTotal = () => {
    var total = 0;
    const cart = cartItem;

    for (var i = 0; i < cart.length; i++) {
      total = total + cart[i].price * cart[i].qty;
    }

    let totalWdc = parseFloat(total).toFixed(2);

    return totalWdc;
  };

  return (
    <React.Fragment>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLabelStyle}>{LABELS.CART_DETAILS}</Text>
        </View>
        <ScrollView vertical>
          {cartItem.length > 0 ? (
            cartItem.map((item, i) => {
              return <ProductCartCard key={i} data={item} />;
            })
          ) : (
            <Text>No products in cart</Text>
          )}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text>₱{OverallTotal()}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.checkout}>
            <Text style={styles.checkoutLabel}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Cart;

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    padding: 10,
    // backgroundColor: COLOR.WHITE,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerLabelStyle: {
    fontWeight: '700',
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: COLOR.WHITE,
    padding: 10,
    height: 80,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontWeight: '700',
  },
  checkout: {
    backgroundColor: COLOR.SECONDARY,
    height: 40,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  checkoutLabel: {
    fontWeight: '700',
    color: COLOR.WHITE,
  },
});
