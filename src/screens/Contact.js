/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Linking,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Contact = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} route={route} />
      <ScrollView style={styles.container}>
        <View style={styles.address}>
          <View style={styles.topContainer}>
            <Image source={require('../../assets/icons/address.png')} />
            <View style={styles.topTextContainer}>
              <Text style={styles.topText}>8882185445</Text>
              <Text style={styles.topText}>
                P 602 Sector 39, Gurgaon-122018, Haryana, India
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => Linking.openURL('')}
            style={styles.topContainer}>
            <Image source={require('../../assets/icons/phone.png')} />

            <View style={styles.topTextContainer}>
              <Text style={styles.topText}>8882185445</Text>
              <Text style={styles.topText}>support@telonestay.com</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.line, {elevation: 3}]}></View>

        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Contact Us</Text>

          <View style={styles.form}>
            <View style={styles.textInputContainer}>
              <Image
                source={require('../../assets/icons/user.png')}
                style={styles.formIcon}
              />
              <TextInput
                placeholder="Name"
                style={styles.textInput}
                placeholderTextColor="#bbb"
              />
            </View>
            <View style={styles.textInputContainer}>
              <Image
                source={require('../../assets/icons/email.png')}
                style={styles.formIcon}
              />
              <TextInput
                placeholder="Email Address"
                style={styles.textInput}
                placeholderTextColor="#bbb"
              />
            </View>
            <View style={styles.textInputContainer}>
              <Image
                source={require('../../assets/icons/phone2.png')}
                style={styles.formIcon}
              />
              <TextInput
                placeholder="Phone No,"
                style={styles.textInput}
                placeholderTextColor="#bbb"
              />
            </View>
            <View
              style={[
                styles.textInputContainer,
                {justifyContent: 'flex-start'},
              ]}>
              <Image
                source={require('../../assets/icons/message.png')}
                style={[styles.formIcon, {top: 25}]}
              />
              <TextInput
                placeholder="Enter Your Message"
                style={[styles.textInput]}
                textAlignVertical="top"
                multiline={true}
                numberOfLines={7}
                placeholderTextColor="#bbb"
              />
            </View>

            <View style={styles.submitView}>
              <Pressable
                style={styles.submit}
                android_ripple={{
                  color: '#ccc',
                  borderless: false,
                  radius: 140,
                }}>
                <Text style={styles.submitText}>Send Message</Text>
                <Image
                  style={styles.submitImage}
                  source={require('../../assets/icons/send.png')}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <Menu navigation={navigation} route={route} />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  address: {
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: '#ccc',
    backgroundColor: '#eee',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  topTextContainer: {
    marginLeft: 19,
    flex: 0,
    flexGrow: 0,
  },
  topText: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  line: {
    marginVertical: 10,
    width: '100%',
    height: 1,
    borderWidth: 2,
    backgroundColor: '#0097C0',
    borderColor: '#0097C0',
    shadowColor: '#0097C0',
    shadowOffset: {width: -5, height: 10},
    shadowOpacity: 1,
    shadowRadius: 0.6,
    borderRadius: 50,
  },
  formContainer: {
    alignItems: 'center',
  },
  formHeading: {
    fontSize: 32,
    color: 'rgba(255, 106, 0, 1)',
    fontFamily: 'Poppins-Regular',
  },
  form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#F5F7FB',
    borderRadius: 15,
    paddingHorizontal: 11,
    paddingVertical: 16,
    paddingLeft: 40,
    marginVertical: 8,
    fontSize: 18,
    color: '#000',
  },
  formIcon: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
  },
  submitView: {
    width: '100%',
    height: 70,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  submit: {
    borderRadius: 15,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: '#E4701D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    flexGrow: 0,
    overflow: 'hidden',
  },
  submitText: {
    fontSize: 20,
    marginRight: 15,
    fontFamily: 'Poppins-Regular',
  },
  submitImage: {
    height: 24,
    width: 32,
  },
});
