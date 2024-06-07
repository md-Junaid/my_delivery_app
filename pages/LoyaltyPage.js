import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import { Col, Row, Grid } from "react-native-paper-grid";
import StarRating from 'react-native-star-rating-widget';
import { Card, ProgressBar, MD3Colors } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoyaltyPage = () => {
  const [rating, setRating] = React.useState(3.5);
  return (
    <ScrollView style={styles.LoyaltyPage}>
      <Row style={styles.header}>
        <Col size={40} style={{marginTop: "auto", marginBottom: "auto"}}>
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 17}}>Badges</Text>
          <StarRating
            rating={rating}
            onChange={setRating}
            maxStars={5}
            starSize={23}
          />
        </Col>
        <Col size={24} style={{paddingTop: 0}}>
          <MaterialCommunityIcons name="account-circle" size={77} color={'blue'} style={{textAlign: "center"}} />
        </Col>
        <Col size={35} style={{marginTop: "auto", marginBottom: "auto"}}>
          <Text style={{fontWeight: 800, fontSize: 20, color: "#16c425", textAlign: "right"}}>430 Points</Text>
          <Text style={{color: "#ffa130", textAlign: "right", fontSize: 15}}>Gold member</Text>
        </Col>
      </Row>
      <View style={{paddingHorizontal: 15}}>
        <Text style={{fontWeight: 600, fontSize: 15}}>My Achievements</Text>
        <View style={{paddingVertical: 10}}>
          <Card mode="elevated" style={{backgroundColor: "white"}}>
            <Card.Content>
              <Row>
                <Col size={40}>
                  <Image source={{uri: 'https://www.hugendubel.com/images/Logo.png'}} resizeMode={'contain'} style={{height: 50}} />
                </Col>
                <Col size={40} style={{marginTop: "auto", marginBottom: "auto"}}>
                  <ProgressBar progress={0.6} color={"#16c425"} />
                </Col>
                <Col size={20} style={{marginTop: "auto", marginBottom: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 22, color: "#16c425", textAlign: "right"}}>6/10</Text>
                </Col>
              </Row>
            </Card.Content>
          </Card>
          <Card mode="elevated" style={{marginTop: 10, backgroundColor: "white"}}>
            <Card.Content>
              <Row>
                <Col size={40}>
                  <Image source={{uri: 'https://www.holstein-kiel.de/wp-content/uploads/2021/02/stoerchemarkt_partner_paulsen_maennermode.png'}} style={{height: 50}} />
                </Col>
                <Col size={40} style={{marginTop: "auto", marginBottom: "auto"}}>
                  <ProgressBar progress={1} color={"#16c425"} />
                </Col>
                <Col size={20} style={{marginTop: "auto", marginBottom: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 22, color: "#16c425", textAlign: "right"}}>5/5</Text>
                </Col>
              </Row>
            </Card.Content>
          </Card>
          <Card mode="elevated" style={{marginTop: 10, backgroundColor: "white"}}>
            <Card.Content>
              <Row>
                <Col size={40}>
                  <Image source={{uri: 'https://www.arkaden-kiel.de/wp-content/uploads/2015/07/hoehenflug_logo.jpg'}} style={{height: 50}} />
                </Col>
                <Col size={40} style={{marginTop: "auto", marginBottom: "auto"}}>
                  <ProgressBar progress={0.25} color={"#16c425"} />
                </Col>
                <Col size={20} style={{marginTop: "auto", marginBottom: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 22, color: "#16c425", textAlign: "right"}}>1/4</Text>
                </Col>
              </Row>
            </Card.Content>
          </Card>
          <Card mode="elevated" style={{marginTop: 10, backgroundColor: "white"}}>
            <Card.Content>
              <Text style={{color: "#16c425", fontSize: 19, fontWeight: 600}}>
                My Unlocked Discounts 🎉
              </Text>
              <Row>
                <Col size={50}>
                  <Image source={{uri: 'https://www.holstein-kiel.de/wp-content/uploads/2021/02/stoerchemarkt_partner_paulsen_maennermode.png'}} style={{height: 42}} />
                </Col>
                <Col size={50} style={{marginVertical: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 22, color: "#16c425", textAlign: "center"}}>10€</Text>
                </Col>
              </Row>
            </Card.Content>
          </Card>
          <Card mode="elevated" style={{marginTop: 10, backgroundColor: "white"}}>
            <Card.Content>
              <Text style={{color: "#16c425", fontSize: 19, fontWeight: 600}}>
                Locked Discounts
              </Text>
              <Row>
                <Col size={40}>
                  <Image source={{uri: 'https://www.hugendubel.com/images/Logo.png'}} 
                    resizeMode={'contain'} 
                    style={{height: 42}} blurRadius={3}
                  />
                </Col>
                <Col size={25} style={{marginVertical: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 16, color: MD3Colors.error50, textAlign: "center"}}>10%</Text>
                </Col>
                <Col size={30} style={{marginVertical: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 16, color: "#16c425", textAlign: "center"}}>250 Points</Text>
                </Col>
              </Row>
              <Row>
                <Col size={40}>
                  <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'}} 
                    resizeMode={'contain'} 
                    style={{height: 42}} 
                    blurRadius={40}
                  />
                </Col>
                <Col size={25} style={{marginVertical: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 16, color: MD3Colors.error50, textAlign: "center"}}>25€</Text>
                </Col>
                <Col size={30} style={{marginVertical: "auto"}}>
                  <Text style={{fontWeight: 700, fontSize: 16, color: "#16c425", textAlign: "center"}}>125 Points</Text>
                </Col>
              </Row>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoyaltyPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 40,
  },
  blurView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});