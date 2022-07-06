import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLOR, Images } from '../../constant/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ADD_CART_ITEM } from '../../redux/action/CartActions';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style';
const ProductDetails = ({ navigation, route }) => {
  const { display_name, price, category, brand, id } = route.params;
  let [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.allCart.products);

  function editOrder(action) {
    if (action == '-') {
      setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  }

  const AddToCart = () => {
    const productItem = {
      ...route.params,
      qty,
    };

    dispatch(ADD_CART_ITEM(productItem));
    alert('Successfully added to cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart', { screen: 'Cart' })}
        >
          <View style={styles.counter}>
            <Text style={{ color: 'white', fontSize: 8 }}>
              {cartItem.length}
            </Text>
          </View>
          <Icon name='shopping-cart' size={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={Images.EMPTY_IMAGE} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Details</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', width: '60%' }}>
            {display_name}
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLOR.WHITE,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              ₱{price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => (qty <= 1 ? '' : editOrder('-'))}
              style={styles.borderBtn}
            >
              <Text style={styles.borderBtnText}>-</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}
            >
              {qty}
            </Text>
            <TouchableOpacity
              onPress={() => editOrder('+')}
              style={styles.borderBtn}
            >
              <Text style={styles.borderBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => AddToCart()} style={styles.buyBtn}>
            <Text
              style={{ color: COLOR.WHITE, fontSize: 18, fontWeight: 'bold' }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
