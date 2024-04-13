import React from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { MaterialIcons } from "@expo/vector-icons"
import TypeWriter from "react-native-typewriter"
import { risottoRecipe, chickenPaellaRecipe, pizzaRecipe } from '../data/dummy-data'

const AiPage = () => {
  const [value, onChangeText] = React.useState('Write me a recipe for Risotto!')
  const [trigger, setTrigger] = React.useState(false)

  function triggerTyping() {
    setTrigger(true)
  }

  React.useEffect(() => {
    setTrigger(false)
  }, [value])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profindo AI</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Write me a recipe for Risotto"
        />
        <PrimaryButton color={'blue'} circle='yes' pressFunc={triggerTyping}>
          <MaterialIcons name="send" size={20} color="white" style={{ paddingTop: 12 }} />
        </PrimaryButton>
      </View>
      <ScrollView style={styles.innerContainer}>
        <TypeWriter typing={4} style={{ fontSize: 16, marginVertical: 10 }}>
          {(value.includes('Risotto') && trigger === true)? risottoRecipe :
          (value.includes('Chicken Paella') && trigger === true)? chickenPaellaRecipe :
          (value.includes('pizza') && trigger === true)? pizzaRecipe : 'You can ask me anything!'}
        </TypeWriter>
      </ScrollView>
    </View>
  )
}

export default AiPage

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    flex: 1
  },
  innerContainer: {
    backgroundColor: '#D1C4E9',
    marginTop: 20,
    borderRadius: 10, 
    padding: 10,
    maxHeight: '82%'
  }
})