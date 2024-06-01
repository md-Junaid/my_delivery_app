import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { Col, Row, Grid } from "react-native-paper-grid";

const GridItem = ({ imageSource, discount, height }) => (
  <Card style={[styles.gridItem, { height }]}>
    <Image source={imageSource} style={styles.image} />
    {discount && (
      <View style={styles.discountContainer}>
        <Text style={styles.discountText}>{discount}</Text>
      </View>
    )}
  </Card>
);

const GridRow = ({ items }) => (
  <View style={styles.gridRow}>
    {items.map((item, index) => (
      <GridItem key={index} {...item} />
    ))}
  </View>
);

const PromoGallery = () => {
  const gridData = [
      { imageSource: require('../assets/promoG/65533_Andre_AdobeStock.jpeg'), discount: '10% off' },
      { imageSource: require('../assets/promoG/coaster-756x500.jpg'), discount: '20% off' },
      { imageSource: require('../assets/promoG/Das_Gute_Nacht_Geschichten_Buch_vom_Koelner_Stadt_Anzeiger.jpg'), discount: '15% off' },
      { imageSource: require('../assets/promoG/file.jpg'), discount: '30% off' },
      { imageSource: require('../assets/promoG/hugo-sakko+extra+slim+fit+arti+m204x-1-768_1024_75-7388613_1.webp'), discount: '15% off' },
      { imageSource: require('../assets/promoG/kaffee-melitta-filterkaffee-500g-harmonie-entkoffeiniert-6711931-1.webp'), discount: '23% off' },
      { imageSource: require('../assets/promoG/vans-old-skool-platform-schwarz-weiss-damen-plateau-schuhe_21782_600x600.jpg'), discount: '35% off' },
      { imageSource: require('../assets/promoG/Wolfra_05L-Apfelsaft-klar_3032-1.png'), discount: '44% off' },
      { imageSource: require('../assets/promoG/Gourmet_Kaffee.png'), discount: '12% off' },
      { imageSource: require('../assets/promoG/alps-coffee.jpeg'), discount: '5% off' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={{marginTop: 40, paddingLeft: 15, fontWeight: "bold", fontSize: 20}}>
        Promotions 
      </Text>
      <Grid>
        <Row>
          <Col size={50}>
            <Card style={styles.gridItem, {height: 206}}>
              <Image source={gridData[0].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[0].discount}</Text>
              </View>
            </Card>
            <Card style={styles.gridItem, {height: 206, marginTop: 10}}>
              <Image source={gridData[5].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[5].discount}</Text>
              </View>
            </Card>
          </Col>
          <Col size={50}>
            <Card style={styles.gridItem, {height: 422}}>
              <Image source={gridData[2].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[2].discount}</Text>
              </View>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={50}>
            <Card style={styles.gridItem, {height: 200}}>
              <Image source={gridData[3].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[3].discount}</Text>
              </View>
            </Card>
          </Col>
          <Col size={50}>
            <Card style={styles.gridItem, {height: 200}}>
              <Image source={gridData[4].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[4].discount}</Text>
              </View>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={100}>
            <Card style={styles.gridItem, {height: 250}}>
              <Image source={gridData[1].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[1].discount}</Text>
              </View>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={50}>
            <Card style={styles.gridItem, {height: 380, backgroundColor: "white"}}>
              <Image source={gridData[7].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[7].discount}</Text>
              </View>
            </Card>
            <Card style={styles.gridItem, {height: 220, marginTop: 10, backgroundColor: "white"}}>
              <Image source={gridData[8].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[8].discount}</Text>
              </View>
            </Card>
          </Col>
          <Col size={50}>
            <Card style={styles.gridItem, {height: 250}}>
              <Image source={gridData[6].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[6].discount}</Text>
              </View>
            </Card>
            <Card style={styles.gridItem, {height: 348, marginTop: 10}}>
              <Image source={gridData[9].imageSource} style={styles.image} />
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{gridData[9].discount}</Text>
              </View>
            </Card>
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  gridItem: {
    width: '32%',
    elevation: 4,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  discountContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(118, 118, 118, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default PromoGallery;