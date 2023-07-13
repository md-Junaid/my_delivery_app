import { PRODUCTS } from "../data/dummy-data";
import { FlatList, View, Text, StyleSheet } from 'react-native';
import ProductItem from "../components/ProductItem";

function ProductOverviewScreen({ navigation, route }) {
  const { categoryId } = route.params;
  const displayedProducts = PRODUCTS.filter(product=>product.categoryIds.includes(categoryId));

  function renderProductItem(itemData) {
    const productItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      price: itemData.item.price,
      inStock: itemData.item.inStock,
    }
    return <ProductItem {...productItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedProducts} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderProductItem}
        numColumns={2}
      />
    </View>
  )
}

export default ProductOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});