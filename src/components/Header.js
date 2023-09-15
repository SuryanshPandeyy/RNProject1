/* eslint-disable prettier/prettier */
import {StyleSheet, Pressable, View, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/logo/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.box}>
        <View style={styles.smallBox}>
          <FontAwesome5 name="phone" color="#fff" size={15} />
        </View>
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Feather name="menu" color="#000" size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7a151029',
    backgroundColor: '#7a151029',
  },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  smallBox: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

  logo: {
    width: 170,
    height: 40,
  },
});
