import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { getCategory, products, filterProduct } from '../../services/products';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import { COLOR, LABELS } from '../../constant/theme';
import ProductCard from '../../components/ProductCard';

const Main = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [catList, setCatList] = useState(getCategory);
  const [productList, setProductList] = useState(products);
  const selectItem = (item) => {
    navigation.navigate('DetailsScreen', item);
  };

  const selectCategory = (item, index) => {
    setSelectedCategory(index);

    try {
      const data = filterProduct(item);
      setProductList(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <React.Fragment>
      <View style={styles.header} />
      <View style={{ flex: 1, backgroundColor: COLOR.WHITE }}>
        <Header />
        <View style={styles.categorySection}>
          <Text style={styles.label}>{LABELS.CATEGORY}</Text>
          <ScrollView horizontal>
            {getCategory.map((item, i) => {
              return (
                <ProductCategory
                  selectCategory={selectCategory}
                  selectedCategory={selectedCategory === i ? true : false}
                  index={i}
                  data={item}
                  key={i}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.productList}>
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 50,
            }}
            numColumns={2}
            data={productList}
            renderItem={({ item, i }) => {
              return (
                <ProductCard data={item} key={i} selectItem={selectItem} />
              );
            }}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  },
  categorySection: {
    marginVertical: 20,
  },
  label: {
    fontWeight: '700',
    fontSize: 18,
    left: 10,
    marginVertical: 5,
  },
  productList: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
});
