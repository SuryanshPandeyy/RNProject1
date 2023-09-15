import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Menu = () => {
  const {getItem} = useAsyncStorage('userToken');
  const [value, setValue] = useState(null);

  useEffect(() => {
    const session = async () => {
      const item = await getItem();
      setValue(item);
    };

    session();
  }, [getItem]);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     let userToken;
  //     userToken = null;

  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
  //   }, 1000);
  // }, []);
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#000'}}>
          <Ionicons
            name={route.name === 'Home' ? 'home' : 'home-outline'}
            size={35}
          />
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Properties')}>
        <Text style={{color: '#000'}}>
          <Ionicons
            name={route.name === 'Properties' ? 'options' : 'options-outline'}
            size={35}
          />
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Stay')}>
        <Text style={{color: '#000'}}>
          <Ionicons
            name={route.name === 'Stay' ? 'bed' : 'bed-outline'}
            size={35}
          />
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text style={{color: '#000'}}>
          <FontAwesome5
            name={route.name === 'Profile' ? 'user-alt' : 'user'}
            size={30}
          />
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Contact')}>
        <Text style={{color: '#000'}}>
          <Ionicons
            name={route.name === 'Contact' ? 'call' : 'call-outline'}
            size={35}
          />
        </Text>
      </Pressable>
      <Pressable
        onPress={() =>
          value === null
            ? navigation.navigate('Login')
            : Alert.alert('You are already Logged In')
        }>
        <Text style={{color: '#000'}}>
          <AntDesign name="login" size={30} />
        </Text>
      </Pressable>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopColor: '#aaa',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
});
