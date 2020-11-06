import React, { Component } from "react";
import { AppRegistry , View, TouchableOpacity } from "react-native";
import {Icon, } from "react-native-elements"
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from '../Dashboard/dashboard'
import Orders from '../Order/order'
import Contact from '../Contact/contact'
import PlaceOrder from '../OrderPlace/placeOrder'
import Services from '../Service/services'
import DrawerMenu from './DrawerMenu'
const yellow = "#fff"
const blue = "#000"
const StackNavigator = createStackNavigator({
    Dashboard :{screen : Dashboard,
        navigationOptions: ({navigation, screenProps}) => ({
          headerBackTitle: null,
          headerTintColor:'#FFF',
          headerStyle: {
            backgroundColor: "#000"
          },
          headerLeft: (
            <View style={{ paddingHorizontal: 10
             }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="arrow-back" size={30} color={yellow} />
              </TouchableOpacity>
            </View>
          )
        }),
    },


    Orders :{screen :Orders,
        navigationOptions: ({navigation, screenProps}) => ({
          headerBackTitle: null,
          headerTintColor:'#FFF',
          headerStyle: {
            backgroundColor: "#000"
          },
          headerLeft: (
            <View style={{ paddingHorizontal: 10
             }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={30} color={yellow} />
              </TouchableOpacity>
            </View>
          )
        }),
    },


    Services :{screen :Services,
        navigationOptions: ({navigation, screenProps}) => ({
          headerBackTitle: null,
          headerTintColor:'#FFF',
          headerStyle: {
            backgroundColor: "#000"
          },
          title:'Orders',
          headerLeft: (
            <View style={{ paddingHorizontal: 10
             }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={30} color={yellow} />
              </TouchableOpacity>
            </View>
          )
        }),
    },

    PlaceOrder :{screen :PlaceOrder,
        navigationOptions: ({navigation, screenProps}) => ({
          headerBackTitle: null,
          headerTintColor:'#FFF',
          headerStyle: {
            backgroundColor: "#000"
          },
          headerLeft: (
            <View style={{ paddingHorizontal: 10
             }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={30} color={yellow} />
              </TouchableOpacity>
            </View>
          )
        }),
    },


    Contact :{screen :Contact,
        navigationOptions: ({navigation, screenProps}) => ({
          headerBackTitle: null,
          headerTintColor:'#FFF',
          headerStyle: {
            backgroundColor: "#000"
          },
          headerLeft: (
            <View style={{ paddingHorizontal: 10
             }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={30} color={yellow} />
              </TouchableOpacity>
            </View>
          )
        }),
    },
})


const Drawer = createDrawerNavigator(
    {
      Main: { screen: StackNavigator }
    },
    {
      contentComponent: DrawerMenu,
    }
  );
  
  const Navigator = createAppContainer(Drawer);
  
  export default Navigator;