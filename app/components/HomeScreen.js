import React, { Component } from 'react';
import {
  Linking,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Image from 'react-native-image-progress';
import { Ionicons } from '@expo/vector-icons';

import { NavigatorTab } from 'MyProfile/app/navigations/NavigationConfiguration';

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
  }
})

const profileImage = require('MyProfile/app/assets/images/me.jpg');
const profileImageBackground = require('MyProfile/app/assets/images/me_background.png');

export default class HomeScreen extends Component {
  static navigationOptions = () => ({
    header: false
  })

  _openUrl = (params) => {
    Linking.openURL(params);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 180}}>
          <View style={{flex: 1, height: 180}}>
            <Image source={profileImageBackground} style={{height: 180}}/>
          </View>
          <View style={{position: 'absolute', backgroundColor: 'rgba(168, 168, 168, 0.8)', flexDirection: 'row', padding: 10, height: 180, width: Dimensions.get('window').width}}>
            <View style={{flex: 1}}>
              <Image
                source={profileImage}
                style={{marginTop: 6, height: 130, width: 130}}
                borderRadius={75}
                resizeMode={'cover'}
              />
            </View>
            <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop:30, marginBottom: 10}}>Agustinus Wikrama D.</Text>
              <Text style={{fontSize: 12}}>Any hard work will always paid.</Text>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity style={{flex: 1}} onPress={() => {this._openUrl('https://www.facebook.com/augustine.wikrama')}}>
                  <Ionicons name="logo-facebook" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => {this._openUrl('https://www.linkedin.com/in/agustinus-wikrama-darmadipta-61779b108/')}}>
                  <Ionicons name="logo-linkedin" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => {this._openUrl('https://github.com/TeaNose')}}>
                  <Ionicons name="logo-github" size={32} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <NavigatorTab />
      </View>
    )
  }
}
