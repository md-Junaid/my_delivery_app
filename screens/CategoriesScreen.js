import { CATEGORIES } from '../data/dummy-data';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

function CategoriesScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Products', {categoryId: itemData.item.id} )
    }
  
    return (
    <CategoryGridTile 
      title={itemData.item.title} 
      icon={itemData.item.icon}
      onPress={pressHandler} 
    />
  )}

  return (
    <>
    <Searchbar
      placeholder="Search"
      onChangeText={updateSearch}
      value={search}
      style={styles.searchbar}
      elevation={2}
    />
    <FlatList 
      data={CATEGORIES}
      keyExtractor={(item)=>item.id}
      renderItem={renderCategoryItem} 
      numColumns={2}
    />
    </>
  )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "white",
    margin: 10,
    marginTop: 30,
  }
})