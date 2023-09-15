/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  LogBox,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Video from 'react-native-video';
LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

const Home = ({}) => {
  const [loader, setLoader] = useState();
  const data = [
    {
      id: 1,
      image: require('../../assets/images/1.png'),
      title: 'Fully Furnished Room',
    },
    {
      id: 2,
      image: require('../../assets/images/2.png'),
      title: '3-tier security',
    },
    {
      id: 3,
      image: require('../../assets/images/3.png'),
      title: 'Power Backup',
    },
    {
      id: 4,
      image: require('../../assets/images/4.png'),
      title: 'Washing Machine',
    },
    {id: 5, image: require('../../assets/images/5.png'), title: 'Smart TV'},
    {
      id: 6,
      image: require('../../assets/images/6.png'),
      title: 'Personal work desk',
    },
    {
      id: 7,
      image: require('../../assets/images/7.png'),
      title: 'No-contact housekeeping',
    },
  ];

  const propData = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.video}>
          {loader ? <ActivityIndicator size="large" /> : null}
          <Video
            source={{uri: 'https://o9stay.com/assets/video/video1.mp4'}} // Can be a URL or a local file.
            style={styles.backgroundVideo}
            resizeMode="cover"
            repeat
            onLoadStart={() => setLoader(true)}
            onLoadEnd={() => setLoader(false)}
            onLoad={() => setLoader(true)}
            onBuffer={() => setLoader(true)}
            muted={true}
          />
        </View>

        <View style={styles.propContainer}>
          <Text style={styles.heading}>Our Properties</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}>
            {propData.map((item, index) => {
              return (
                <View key={index} style={styles.carousel}>
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
                      Sector 30 Gurgaon
                    </Text>
                  </View>

                  <View style={styles.carouselFooterContainer}>
                    <View style={styles.carouselFooter}>
                      <Text style={styles.carouselText1}>11000</Text>
                      <Text style={styles.carouselText2}>Deposit</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.carouselFooter}>
                      <Text style={styles.carouselText1}>Single & Sharing</Text>
                      <Text style={styles.carouselText2}>Room</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.carouselFooter}>
                      <Text style={styles.carouselText1}>Yes</Text>
                      <Text style={styles.carouselText2}>Food</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.amenities}>
          <Text style={[styles.heading, {width: 270}]}>
            Amenities Included in Rent
          </Text>

          <View style={styles.amenitiesGrid}>
            {data
              .filter(item => item.id < 5)
              .map((item, i) => {
                return (
                  <View key={i} style={styles.amenitiesGridItems}>
                    <Image
                      source={item.image}
                      style={{width: 80, height: 80}}
                    />
                    <Text
                      style={{
                        color: '#000',
                        textAlign: 'center',
                        fontSize: 10,
                        // width: 80,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                );
              })}
          </View>
          <View style={styles.amenitiesGrid}>
            {data
              .filter(item => item.id >= 5)
              .map((item, i) => {
                return (
                  <View key={i} style={styles.amenitiesGridItems}>
                    <Image
                      source={item.image}
                      style={{width: 80, height: 80}}
                    />
                    <Text
                      style={{
                        color: '#000',
                        textAlign: 'center',
                        fontSize: 10,
                        // width: 80,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                );
              })}
          </View>
        </View>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  video: {
    borderWidth: 1,
    height: 200,
    borderColor: '#ccc',
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  propContainer: {},
  heading: {
    color: '#005e9b',
    fontSize: 22,
    borderBottomColor: '#961d1d',
    borderBottomWidth: 2,
    width: 150,
    marginHorizontal: 20,
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  carousel: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 300,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 30,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  carouselImage: {
    height: 150,
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

  amenitiesGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 20,
  },

  amenitiesGridItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
