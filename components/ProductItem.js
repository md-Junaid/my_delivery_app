import { View, Pressable, Text, StyleSheet, Platform, Image, Button } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { MaterialIcons } from "@expo/vector-icons";
import Colors from '../constants/colors';

function ProductItem({ title, imageUrl, price, inStock, storeLogo }) {
  return (
    <View style={styles.productItem}>
      <View style={[styles.innerContainer]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <View style={{height:"50%", overflow: "hidden"}}><Text style={styles.detailTitle}>{title}</Text></View>
          <Text style={styles.detailInfo}>Price: <Text style={{fontWeight: 600}}>{price}€</Text></Text>
          <Text style={styles.detailInfo}>Stock: {inStock}</Text>
          <View style={{height: 60, width: 70, paddingTop: 5}}>
            <Image source={{ uri: storeLogo }} style={{ height: 30, resizeMode: 'center'}} />
          </View>
        </View>
        <View style={styles.actions}>
          {/** Two buttons, where one button takes you to more info page and the other adds item to cart */}
          <View style={styles.buttonContainer}>
            <PrimaryButton color={Colors.primary600}>
              <MaterialIcons name="read-more" size={24} color="white" />
            </PrimaryButton>
            {/* <Button icon title="More Info" onPress={() => {}} /> */}
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton color={Colors.primary600}>
              <MaterialIcons name="shopping-cart" size={24} color="white" />
            </PrimaryButton>
            {/* <Button title="Add to Cart" onPress={() => {}} /> */}
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  productItem: {
    flex: 1,
    margin: 5,
    height: 280,
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    backgroundColor: 'white',
    overflow: Platform.OS==='android' ? 'hidden':'visible',
  },
  detailTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 4,
    fontSize: 16,
  },
  detailInfo: {
    fontSize: 12,
  },
  details: {
    paddingHorizontal: 8,
    height: '36%',
  },
  innerContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonspacer: {
    marginLeft: 1
  }
});