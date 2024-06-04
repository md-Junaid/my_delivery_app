import { PRODUCTS } from "../data/dummy-data";
import { FlatList, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ProductItem from "../components/ProductItem";
import React from 'react';
import {Grid, Row, Col} from 'react-native-paper-grid';
import {Card} from 'react-native-paper';

function ProductOverviewScreen({ navigation, route }) {
  const { categoryId } = route.params;
  const displayedProducts = PRODUCTS.filter(product=>product.categoryIds.includes(categoryId));

  function renderProductItem(itemData) {
    const productItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      price: itemData.item.price,
      inStock: itemData.item.inStock,
      storeLogo: itemData.item.storeLogo,
    }
    return <ProductItem {...productItemProps} />
  }

  return (
    <View style={styles.container}>
      {displayedProducts.length === 0 && 
        <Text style={{textAlign: "center", fontWeight: 600, fontSize: 16}}>No products found, please come back again later!</Text>
      }
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