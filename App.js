/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Linking,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import Home from './src/screens/Home';
import {AuthContext} from './src/context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Profile from './src/screens/Profile';
import Contact from './src/screens/Contact';
import Properties from './src/screens/Properties';
import Stay from './src/screens/Stay';
import Login from './src/screens/Login';
const Drawer = createDrawerNavigator();

const App = () => {
  const [loader, setLoader] = useState(true);

  const initialLoginState = {
    isLoading: true,
    id: null,
    userToken: null,
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const loginReducer = (state, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...state,
          id: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...state,
          id: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (token, email) => {
        let userToken = String(token);
        let userEmail = String(email);
        try {
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('email', userEmail);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGIN', id: userEmail, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('email');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (loader) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <Image
          source={require('./assets/logo/logo.png')}
          style={{marginBottom: 100, width: 250, height: 50}}
        />
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const authOptions = [
    {
      name: 'Login',
      component: Login,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
    {
      name: 'Home',
      component: Home,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
    {
      name: 'Contact',
      component: Contact,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
    {
      name: 'Properties',
      component: Properties,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
  ];

  const tabOptions = [
    {
      name: 'Home',
      component: Home,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
    {
      name: 'Contact',
      component: Contact,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
    {
      name: 'Properties',
      component: Properties,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
    {
      name: 'Stay',
      component: Stay,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
    {
      name: 'Profile',
      component: Profile,
      options: ({route}) => ({
        headerShown: false,
        // animation: 'none',
        drawerItemStyle: {height: 0},
      }),
    },
  ];

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            backBehavior="history"
            initialRouteName="Home"
            screenOptions={{
              drawerPosition: 'right',
              drawerStyle: {margin: 0, padding: 0},
            }}
            drawerContent={props => {
              return (
                <DrawerContentScrollView {...props}>
                  <DrawerItem
                    label="About"
                    onPress={() =>
                      Linking.openURL('https://telonestay.com/about')
                    }
                  />
                  <DrawerItem
                    label="FAQ"
                    onPress={() =>
                      Linking.openURL('https://telonestay.com/faq')
                    }
                  />
                  <DrawerItem
                    label="Terms and Conditions"
                    onPress={() =>
                      Linking.openURL(
                        'https://telonestay.com/term-and-condition',
                      )
                    }
                  />
                  <DrawerItem
                    label="Privacy Policy"
                    onPress={() =>
                      Linking.openURL('https://telonestay.com/privacy')
                    }
                  />
                  {loginState.userToken !== null && (
                    <DrawerItem
                      label="Log Out"
                      onPress={async () => {
                        await AsyncStorage.removeItem('userToken');
                        await AsyncStorage.removeItem('email');
                        dispatch({type: 'LOGOUT'});
                      }}
                    />
                  )}
                </DrawerContentScrollView>
              );
            }}>
            {loginState.userToken === null
              ? authOptions.map((item, i) => {
                  console.log('a');
                  return (
                    <Drawer.Screen
                      key={i}
                      name={item.name}
                      component={item.component}
                      options={item.options}
                    />
                  );
                })
              : tabOptions.map((item, i) => {
                  console.log('b');
                  return (
                    <Drawer.Screen
                      key={i}
                      name={item.name}
                      component={item.component}
                      options={item.options}
                    />
                  );
                })}
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
