import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width / 2 - 30;
import { COLOR, Images } from '../../constant/theme';
const ProductCard = ({ data, selectItem }) => {
  const { display_name, price } = data;
  return (
    <TouchableOpacity onPress={() => selectItem(data)} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={Images.EMPTY_IMAGE} style={styles.image} />
      </View>
      <Text>{display_name}</Text>
      <View style={styles.price}>
        <Text>₱{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: COLOR.LIGHT,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  imageContainer: {
    height: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: { flex: 1, resizeMode: 'contain' },
});
