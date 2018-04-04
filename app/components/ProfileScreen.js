import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  StatusBar,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: 50,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgb(194, 194, 194)',
    padding: 10,
    alignItems: 'center',
  },
  dataContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgb(194, 194, 194)',
    padding: 10,
    justifyContent: 'center',
  },
  dataTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgb(194, 194, 194)',
  },
  dataFont: {
    fontSize: 12,
  },
  dataDescFont: {
    fontSize: 12,
    marginTop: 5,
  },
  circlePoint: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: '#606060',
    position: 'absolute',
    left: 126,
    top: 3,
    zIndex: 2
  },
  workDescContainer: {
    flex: 1,
    borderLeftWidth: 1,
    paddingLeft: 10,
    paddingBottom: 10,
    borderColor: 'rgb(194, 194, 194)'
  },
})

export default class ProfileScreen extends Component {
  static navigationOptions = () => ({
    header: false
  })

  state = {
    access_token: undefined,
    expires_in: undefined,
    refreshing: false,
  }

  constructor(props) {
    super(props)
    StatusBar.setHidden(true)
  }

  render() {
    const { emailAddress, pictureUrls, refreshing, firstName, lastName, headline, summary } = this.state
    return (
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.dataTitle}>Contact</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="md-mail" size={32} color="black" />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataFont}>agustinuswikrama@gmail.com</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="md-phone-portrait" size={32} color="black" />
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataFont}>+62-8967-6733-275</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="md-home" size={32} color="black" />
          </View>
          <View style={{flex: 1, borderBottomWidth: 1, borderColor: 'rgb(194, 194, 194)', padding: 10, justifyContent: 'center'}}>
            <Text style={styles.dataFont}>Yogyakarta</Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.dataTitle}>Work Experiences</Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 130}}>
              <Text style={{fontWeight: 'bold', fontSize: 12, color: '#606060'}}>Sept 2017 - Present</Text>
            </View>
            <View style={styles.circlePoint}/>
            <View style={styles.workDescContainer}>
              <Text style={[styles.dataFont, {fontWeight: 'bold', color: '#606060'}]}>Mobile App Developer</Text>
              <Text style={styles.dataDescFont}>at <Text style={{fontWeight: 'bold', color: '#606060'}}>Karir.com</Text></Text>
              <Text style={styles.dataDescFont}>Responsible for creating and bug fixing Karir.com mobile app using React Native.</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 130}}>
              <Text style={{fontWeight: 'bold', fontSize: 12, color: '#606060'}}>Aug 2014 - Sept 2017</Text>
            </View>
            <View style={styles.circlePoint}/>
            <View style={{flex: 1, borderLeftWidth: 1, paddingLeft: 10, paddingBottom: 10, borderColor: 'rgb(194, 194, 194)'}}>
              <Text style={[styles.dataFont, {fontWeight: 'bold', color: '#606060'}]}>Java Developer</Text>
              <Text style={styles.dataDescFont}>at <Text style={{fontWeight: 'bold', color: '#606060'}}>PT. Niagaprima Paramitra</Text></Text>
              <Text style={styles.dataDescFont}>Create ACC-Me mobile application for Astra Credit Company using IBM Mobile First Platform. The application itself is a kind of mobile survey application.</Text>
              <Text style={styles.dataDescFont}>Create Xtimo mobile application API to take a notes about timesheet.</Text>
              <Text style={styles.dataDescFont}>Querying report using oracle at PT. Smartfren Tbk.</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 130}}>
              <Text style={{fontWeight: 'bold', fontSize: 12, color: '#606060'}}>Jan 2014 - Jul 2014</Text>
            </View>
            <View style={styles.circlePoint}/>
            <View style={{flex: 1, borderLeftWidth: 1, paddingLeft: 10, paddingBottom: 10, borderColor: 'rgb(194, 194, 194)'}}>
              <Text style={[styles.dataFont, {fontWeight: 'bold', color: '#606060', color: '#606060'}]}>Java Developer</Text>
              <Text style={styles.dataDescFont}>at <Text style={{fontWeight: 'bold', color: '#606060'}}>PT. Adicipta Inovasi Teknologi</Text></Text>
              <Text style={styles.dataDescFont}>Maintain BBM mobile collection application and maintain application at clients once a month.</Text>
            </View>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.dataTitle}>Skills</Text>
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 20}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.dataFont}>Beginner</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.dataFont}>Intermediate</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={styles.dataFont}>Expert</Text>
            </View>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: 'rgb(194, 194, 194)', marginTop: 15, marginBottom: 15}}/>
          <View style={{position: 'absolute', paddingLeft:10, paddingRight: 10, paddingTop: 35, flex: 1, flexDirection: 'row'}}>
            <View style={{height: 15, width: 15, borderRadius: 15, backgroundColor: '#B5B5B5', marginLeft: 18}}/>
            <View style={{height: 15, width: 15, borderRadius: 15, backgroundColor: '#888888', marginLeft: Dimensions.get('window').width/3 + 10}}/>
            <View style={{height: 15, width: 15, borderRadius: 15, backgroundColor: '#606060', marginLeft: Dimensions.get('window').width/2 - 50}}/>
          </View>

          <View style={{flex: 1, backgroundColor: '#6B6B6B', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, marginLeft: 25, marginRight: 50, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 12}}>Java</Text>
          </View>
          <View style={{flex: 1, backgroundColor: '#797979', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, marginLeft: 25, marginRight: 90, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 12}}>React Native</Text>
          </View>
          <View style={{flex: 1, backgroundColor: '#888888', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, marginLeft: 25, marginRight: 170, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 12}}>HTML</Text>
          </View>
          <View style={{flex: 1, backgroundColor: '#888888', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, marginLeft: 25, marginRight: 170, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 12}}>CSS</Text>
          </View>
          <View style={{flex: 1, backgroundColor: '#979797', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, marginLeft: 25, marginRight: 220, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 12}}>SQL</Text>
          </View>

        </View>
      </ScrollView>
    )
  }
}
