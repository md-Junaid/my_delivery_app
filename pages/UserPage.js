import React from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView, Pressable } from 'react-native'
import { Avatar, Card, Button, List } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../constants/colors'

const UserPage = () => {

  function settingsPress() {
    console.log('Settings Pressed')
  }
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="storefront" size={30} color={'purple'} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>Profindo</Text>
          </View>
          <Pressable android_ripple={{color: 'gray'}} onPress={()=> settingsPress()}>
            <MaterialCommunityIcons name="cog" size={32} color="#414141" />
          </Pressable>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Avatar.Image size={164} source={require('../assets/Marten.jpg')} aria-label='MJ'
            style={{ elevation: 18, backgroundColor: 'lightgray' }}
          />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10, color: "#414141" }}>Marten Jacobs</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 45 }}>
        <Card style={{maxWidth: '45%'}}>
          <Card.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text variant="titleLarge" style={{fontWeight: 'bold', fontSize: 18}}>Basic</Text>
            <MaterialCommunityIcons name="brightness-percent" size={48} color="gray" />
            <List.Item
              title="Order items"
              left={() => <List.Icon icon="check" color='green' />}
            />
            <List.Item
              title="Offers & discounts"
              left={() => <List.Icon icon="close" />}
            />
            <List.Item
              title="Items availablity"
              left={() => <List.Icon icon="close" />}
            />
            <List.Item
              title="Ai suggestions"
              left={() => <List.Icon icon="close" />}
            />
          </Card.Content>
        </Card>
        <Card style={{maxWidth: '45%'}}>
          <Card.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text variant="titleLarge" style={{fontWeight: 'bold', fontSize: 18}}>Premium</Text>
            <MaterialCommunityIcons name="brightness-percent" size={48} color="purple" />
            <List.Item
              title="Order items"
              left={() => <List.Icon icon="check" color='green'  />}
            />
            <List.Item
              title="Offers & discounts"
              left={() => <List.Icon icon="check" color='green'  />}
            />
            <List.Item
              title="Items availablity"
              left={() => <List.Icon icon="check" color='green'  />}
            />
            <List.Item
              title="Ai suggestions"
              left={() => <List.Icon icon="check" color='green'  />}
            />
          </Card.Content>
        </Card>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginVertical: 20 }}>
        Current subscription: Basic
      </Text>
      </>
  )
}

export default UserPage

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#D1C4E9',
    elevation: 15,
    paddingBottom: 15,
  },
})