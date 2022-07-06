import { products } from '../constant/dummy';

const getCategory = [...new Set(products.map((item) => item.category))];

const filterProduct = (category) => {
  const newData = products.filter(function (item) {
    const itemData = item.category
      ? item.category.toLowerCase()
      : ''.toLowerCase();
    const textData = category.toLowerCase();
    return itemData.includes(textData);
  });

  return newData;
};

export { getCategory, products, filterProduct };
