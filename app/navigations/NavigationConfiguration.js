import React, {Component} from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import ExperienceScreen from 'MyProfile/app/components/ExperienceScreen';
import ProfileScreen from 'MyProfile/app/components/ProfileScreen';

const NavigatorTabProfile = StackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarVisible:true
    }
  },
});

const NavigatorTabExperience = StackNavigator({
  ExperienceScreen: {
    screen: ExperienceScreen,
    navigationOptions: {
      tabBarVisible:true
    }
  },
});

const routeConfiguration = {
  TabProfileNavigation: {
    screen: NavigatorTabProfile,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Profile',
    })
  },
  TabExperienceNavigation: {
    screen: NavigatorTabExperience,
    navigationOptions: {
      tabBarLabel: 'Experiences',
    }
   },
}

const tabBarConfiguration = {
  //...other configs
  initialRouteName: 'TabProfileNavigation',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'top',
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    style: {borderTopWidth:1, borderColor:'red', backgroundColor:'rgb(38, 38, 38)', paddingBottom:15},
    labelStyle: {fontWeight:'bold', fontSize:12}
  },
  swipeEnabled: true,
  animationEnabled: false,
}

export const NavigatorTab = TabNavigator(routeConfiguration,tabBarConfiguration);
