import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function CategoryGridTile({ title, icon, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{color: "#ccc"}} 
        style={({ pressed })=>[styles.button, pressed? styles.buttonPressed:null]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer]}>
          <FontAwesomeIcon size={21} icon={ icon } />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    elevation: 6,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    backgroundColor: 'white',
    overflow: Platform.OS==='android' ? 'hidden':'visible',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 6,
  }
});