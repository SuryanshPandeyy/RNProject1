import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Properties = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.profImage}>
          <Image
            source={{uri: 'https://telonestay.com/Content/images/user.png'}}
            style={{width: 150, height: 150}}
          />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text style={styles.text}>Name:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.details}>
            <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.details}>
            <Text style={styles.text}>Phone:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.details}>
            <Text style={styles.text}>User Type:</Text>
            <TextInput style={styles.textInput} />
          </View>
        </View>

        <Pressable style={styles.submit}>
          <Text style={{color: '#fff', fontSize: 20}}>Update</Text>
        </Pressable>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Properties;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  detailsContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 20,
  },

  details: {
    marginVertical: 10,
  },

  text: {
    color: '#555555',
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 5,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#aaa',
    color: '#000',
  },

  submit: {
    borderRadius: 15,
    width: '90%',
    height: 70,
    backgroundColor: '#ee2e24',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 50,
  },
});
