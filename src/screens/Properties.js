/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Properties = () => {
  const data = [
    {
      id: 1,
      title: 'Sector 30 Gurgaon',
      price: 11000,
      type: 'Single & Sharing',
      food: 'Yes',
    },
    {
      id: 2,
      title: 'Sector 30 Gurgaon',
      price: 11000,
      type: 'Single & Sharing',
      food: 'Yes',
    },
    {
      id: 3,
      title: 'Sector 30 Gurgaon',
      price: 11000,
      type: 'Single & Sharing',
      food: 'Yes',
    },
    {
      id: 4,
      title: 'Sector 30 Gurgaon',
      price: 11000,
      type: 'Single & Sharing',
      food: 'Yes',
    },
    {
      id: 5,
      title: 'Sector 30 Gurgaon',
      price: 11000,
      type: 'Single & Sharing',
      food: 'Yes',
    },
    {
      id: 6,
      title: 'Sector 30 Gurgaon',
      price: 11000,
      type: 'Single & Sharing',
      food: 'Yes',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          contentContainerStyle={styles.carouselContainer}
          renderItem={({item}) => {
            return (
              <View style={styles.carousel}>
                <View>
                  <Image
                    source={require('../../assets/images/slider.png')}
                    style={styles.carouselImage}
                  />
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: 10,
                      marginTop: 10,
                      fontSize: 20,
                    }}>
                    {item.title}
                  </Text>
                </View>

                <View style={styles.carouselFooterContainer}>
                  <View style={styles.carouselFooter}>
                    <Text style={styles.carouselText1}>{item.price}</Text>
                    <Text style={styles.carouselText2}>Deposit</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.carouselFooter}>
                    <Text style={styles.carouselText1}>{item.type}</Text>
                    <Text style={styles.carouselText2}>Room</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.carouselFooter}>
                    <Text style={styles.carouselText1}>{item.food}</Text>
                    <Text style={styles.carouselText2}>Food</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <Menu />
    </View>
  );
};

export default Properties;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  carousel: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 330,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 30,
    overflow: 'hidden',
    marginVertical: 20,
  },
  carouselImage: {
    height: 200,
    width: '100%',
  },
  carouselFooterContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  carouselFooter: {
    textAlign: 'center',
    alignItems: 'center',
  },
  carouselText1: {
    color: '#000',
    marginBottom: 4,
    fontSize: 14,
  },
  carouselText2: {
    color: '#000',
    fontSize: 11.2,
  },
  line: {
    height: 50,
    width: 0.5,
    borderWidth: 0.8,
    borderColor: '#ccc',
  },
});
