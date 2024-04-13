import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";
import { useTheme } from "react-native-paper";


function PrimaryButton({ color, circle='no', pressFunc, children }) {
  const theme = useTheme();
  return  (
    <View style={ circle==='yes'? styles.buttonOuterContainerCircle : styles.buttonOuterContainer}>
      <Pressable android_ripple={{color: Colors.primary600}}
        style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer, {backgroundColor: Colors.primary600 }]
        : [styles.buttonInnerContainer, {backgroundColor: Colors.primary500 }]}
        onPress={pressFunc}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    borderRadius: 0,
  },
  buttonOuterContainerCircle: {
    overflow: "hidden",
    borderRadius: 25,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,       // <-- Android Only
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  }
});