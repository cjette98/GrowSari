import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLOR } from '../../constant/theme';

const ProductCategory = ({ data, index, selectCategory, selectedCategory }) => {
  return (
    <TouchableOpacity
      onPress={() => selectCategory(data, index)}
      style={[
        styles.container,
        { backgroundColor: selectedCategory ? COLOR.BLACK : 'transparent' },
      ]}
    >
      <Text style={{ color: selectedCategory ? COLOR.WHITE : COLOR.BLACK }}>
        {data}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(108, 122, 137, 0.8)',
  },
});
