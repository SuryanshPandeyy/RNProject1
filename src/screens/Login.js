import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import {AuthContext} from '../context/context';
import Menu from '../components/Menu';

const Login = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async e => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      try {
        await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        })
          .then(res => res.json())
          .then(data => {
            if (data.status) {
              console.log(data.token);
              const token = data.token;
              signIn(token, email);
              navigation.navigate('Home');
            }
          });
      } catch (err) {
        Alert.alert('Oops', err.message);
      }
    } else {
      Alert.alert('Wrong Input', 'Email or Password field cannot be empty');
    }
  };
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={{color: '#000', marginVertical: 40, fontSize: 30}}>
            Login
          </Text>
          <TextInput
            style={styles.profileTextInput}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.profileTextInput}
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Pressable style={styles.profileBtn} onPress={submit}>
            <Text style={{color: '#fff', fontSize: 20}}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  profileTextInput: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 20,
    color: '#000',
  },
  loginBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  profileBtn: {
    backgroundColor: 'red',
    width: 140,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
