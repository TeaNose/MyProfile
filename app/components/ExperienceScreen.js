import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const karirImage = require('MyProfile/app/assets/images/karir_mobile_ss.png');
const boostImage = require('MyProfile/app/assets/images/boost_play_ss.png');
const parokiPugeranImage = require('MyProfile/app/assets/images/parokipugeran.png');

const styles = StyleSheet.create({
  dataTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgb(194, 194, 194)',
  },
  titleFont: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(150, 150, 150)'
  },
  lineTitle: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgb(194, 194, 194)',
    marginTop: 10
  },
  titleAppContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  titleApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rowContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 120,
    height: 220
  },
  titleDataFont: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  dataFont: {
    fontSize: 12,
    marginTop: 10,
  }
})

export default class ExperienceScreen extends Component {
  static navigationOptions = () => ({
    header: false
  })

  // <Animatable.View animation="fadeIn" duration={3000} style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
  //   <Text>This is setting screen</Text>
  // </Animatable.View>

  _openUrl = (params) => {
    Linking.openURL(params);
  };

  render() {
    return (
      <ScrollView style={{marginBottom: 20}}>
        <View style={styles.titleContainer}>
          <Text style={styles.dataTitle}>My Experiences</Text>
        </View>

        <View style={styles.titleAppContainer}>
          <View style={[styles.lineTitle, {backgroundColor: '#E34234'}]} />
          <TouchableOpacity style={styles.titleApp} onPress={() => {this._openUrl('https://play.google.com/store/apps/details?id=com.dialog.boost.client.android&hl=in')}}>
            <Text style={[styles.titleFont, {color: '#E34234'}]}>BoostPlay</Text>
          </TouchableOpacity>
          <View style={[styles.lineTitle, {backgroundColor: '#E34234'}]} />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.imageContainer} onPress={() => {this._openUrl('https://play.google.com/store/apps/details?id=com.dialog.boost.client.android&hl=in')}}>
            <Image source={boostImage} style={styles.image}/>
          </TouchableOpacity>
          <View style={{flex: 1}}>
          <Text style={[styles.titleDataFont, {color: '#E34234'}]}>Mobile Application</Text>
          <Text style={[styles.titleDataFont, {marginTop: 10, color: '#E34234'}]}>React Native</Text>
            <Text style={styles.dataFont}>
              BoostPlay is a mobile application where the users can get some coupon which can be trade to buy something using qr code.
              I develop this application with my friends as a freelancer.
            </Text>
          </View>
        </View>

        <View style={styles.titleAppContainer}>
        <View style={[styles.lineTitle, {backgroundColor: '#0077be'}]} />
        <TouchableOpacity style={styles.titleApp} onPress={() => {this._openUrl('https://play.google.com/store/apps/details?id=com.karir.mobile&hl=in')}}>
          <Text style={[styles.titleFont, {color: '#0077be'}]}>Karir.com</Text>
        </TouchableOpacity>
        <View style={[styles.lineTitle, {backgroundColor: '#0077be'}]} />
        </View>
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={[styles.titleDataFont, {color: '#0077be'}]}>Mobile Application</Text>
            <Text style={[styles.titleDataFont, {marginTop: 10, color: '#0077be'}]}>React Native</Text>
            <Text style={styles.dataFont}>
              Karir.com is a mobile application which I developed with my friend as mobile developer at PT. Karir Komunika Pratama.
              This mobile application provide the users about job vacancies that available in Indonesia and also make the users can apply the job he wants in an easy way.
            </Text>
          </View>
          <TouchableOpacity style={styles.imageContainer} onPress={() => {this._openUrl('https://play.google.com/store/apps/details?id=com.karir.mobile&hl=in')}}>
            <Image source={karirImage} style={styles.image}/>
          </TouchableOpacity>
        </View>

        <View style={styles.titleAppContainer}>
          <View style={[styles.lineTitle, {backgroundColor: '#AB2D31'}]} />
          <TouchableOpacity style={[styles.titleApp, {flex: 2}]} onPress={() => {this._openUrl('http://parokipugeran.org')}}>
            <Text style={[styles.titleFont, {color: '#AB2D31'}]}>Parokipugeran.org</Text>
          </TouchableOpacity>
          <View style={[styles.lineTitle, {backgroundColor: '#AB2D31'}]} />
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.imageContainer} onPress={() => {this._openUrl('http://parokipugeran.org')}}>
            <Image source={parokiPugeranImage} style={[styles.image, {height: 200, width: 150}]}/>
          </TouchableOpacity>
          <View style={{flex: 1}}>
          <Text style={[styles.titleDataFont, {color: '#AB2D31'}]}>Website</Text>
          <Text style={[styles.titleDataFont, {marginTop: 10, color: '#AB2D31'}]}>HTML, CSS</Text>
            <Text style={styles.dataFont}>
              Static website which contains information about mass schedule and announcement about event that happen in my church.
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
