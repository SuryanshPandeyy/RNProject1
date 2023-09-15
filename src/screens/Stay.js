/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Properties = () => {
  const [tabValue, setTabValue] = useState('Rent');

  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.heading}>Stay Details</Text>

          <View style={styles.desc}>
            <View style={styles.descItem}>
              <Text style={styles.descText1}>Property No</Text>
              <Text style={styles.descText2}>1202</Text>
            </View>
            <View style={styles.descItem}>
              <Text style={styles.descText1}>Room No</Text>
              <Text style={styles.descText2}>1204</Text>
            </View>
          </View>
        </View>
        <View style={[styles.details, {marginVertical: 20}]}>
          <Text style={styles.heading}>Pay Yout Rent</Text>

          <View style={styles.tab}>
            <Pressable
              onPress={() => setTabValue('Rent')}
              style={[
                styles.tabList,
                tabValue === 'Rent' ? styles.tabListActive : {},
              ]}>
              <Text
                style={tabValue === 'Rent' ? {color: '#fff'} : {color: '#000'}}>
                Rent
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setTabValue('Security')}
              style={[
                styles.tabList,
                tabValue === 'Security' ? styles.tabListActive : {},
              ]}>
              <Text
                style={
                  tabValue === 'Security' ? {color: '#fff'} : {color: '#aaa'}
                }>
                Security
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setTabValue('Check Out')}
              style={[
                styles.tabList,
                tabValue === 'Check Out' ? styles.tabListActive : {},
              ]}>
              <Text
                style={
                  tabValue === 'Check Out' ? {color: '#fff'} : {color: '#aaa'}
                }>
                Check Out
              </Text>
            </Pressable>
          </View>

          {tabValue === 'Rent' && (
            <View style={styles.rentDetails}>
              <TextInput value="0" style={styles.rentInput} />
              <TextInput value="01 May 2022" style={styles.rentInput} />
              <TextInput value="31 May 2022" style={styles.rentInput} />
              <TextInput
                value="Promo Code"
                style={[styles.rentInput, {backgroundColor: '#fff'}]}
              />
              <Pressable style={styles.rentSubmit}>
                <Text style={{color: '#da241a'}}>Pay Now</Text>
              </Pressable>
            </View>
          )}
          {tabValue === 'Security' && (
            <View style={styles.rentDetails}>
              <TextInput
                value="0"
                style={[styles.rentInput, {backgroundColor: '#fff'}]}
              />
              <Pressable style={styles.rentSubmit}>
                <Text style={{color: '#da241a'}}>Pay Now</Text>
              </Pressable>
            </View>
          )}
          {tabValue === 'Check Out' && (
            <View style={[styles.rentDetails, {marginVertical: 10}]}>
              <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
                Already Requested On 30 Jun 2022
              </Text>
            </View>
          )}
        </View>

        <View style={[styles.details, {marginBottom: 15}]}>
          <Text style={styles.heading}>Payment History</Text>

          <ScrollView horizontal style={styles.payment}>
            <View>
              <View style={styles.paymentHeader}>
                <Text style={styles.paymentTextHeader}>Order Id</Text>
                <Text style={styles.paymentTextHeader}>Property Id</Text>
                <Text style={styles.paymentTextHeader}>Payment Type</Text>
                <Text style={styles.paymentTextHeader}>Amount</Text>
                <Text style={styles.paymentTextHeader}>Payment Status</Text>
                <Text style={styles.paymentTextHeader}>Payment Date</Text>
                <Text style={styles.paymentTextHeader}>Invoice</Text>
              </View>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentText}>7474</Text>
                <Text style={styles.paymentText}>1202</Text>
                <Text style={styles.paymentText}>Security</Text>
                <Text style={styles.paymentText}>4</Text>
                <Text style={styles.paymentText}>Success</Text>
                <Text style={styles.paymentText}>17 May 2022</Text>
                <Pressable>
                  <Text style={[styles.paymentText, {color: '#da241a'}]}>
                    Download
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Properties;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  details: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 15,
  },
  heading: {
    color: '#DA241A',
    fontSize: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#DA241A',
    paddingLeft: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  descItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '50%',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  descText1: {
    color: '#000',
    fontWeight: 'bold',
  },
  descText2: {
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  tabList: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  tabListActive: {
    backgroundColor: '#F44336',
    borderColor: '#F44336',
    borderWidth: 1,
  },

  rentDetails: {
    paddingHorizontal: 10,
  },

  rentInput: {
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#ccc',
    color: '#495057',
    marginVertical: 10,
  },
  rentSubmit: {
    borderWidth: 2,
    borderColor: '#da241a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginVertical: 10,
  },

  paymentHeader: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    marginTop: 15,
    alignItems: 'center',
  },
  paymentDetails: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  paymentText: {
    color: '#000',
    width: 100,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  paymentTextHeader: {
    color: '#000',
    fontWeight: 'bold',
    width: 100,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
