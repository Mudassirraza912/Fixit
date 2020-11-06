import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Image, ImageBackground
} from "react-native";
import { NavigationActions } from "react-navigation";
import { Container, Header, Body, Content } from 'native-base'
import { Avatar, Button, Icon } from "react-native-elements"
import LinearGradient from 'react-native-linear-gradient';
const yellow = "#fff"
const blue = "#000"
import Sidebar from '../../assets/Sidebar.png'
import IconApp from '../../assets/icon.png'

class DrawerMenu extends Component {
 
  render() {
    return (
      <View style={{flex: 1,  alignContent: "center"}}>
      <ImageBackground source={Sidebar} style={{ backgroundColor: blue, height:'100%', width:'100%' ,alignContent:'center'}}>
        
      <View style={{paddingVertical:30}}>
        <Image source={IconApp} style={{width:'80%',alignSelf:'center', height:120}} />
      </View>


        
      <TouchableOpacity
          style={{width:'90%', alignSelf:'center'}}
          onPress={() =>  this.props.navigation.navigate('Dashboard')}
        >
        <LinearGradient  start={{x: 0, y: 1}} end={{x: 1.2, y: 0}}colors={['#4d4d4d', '#ffffff', '#000']} style={{ padding: 5,
    marginBottom: 2,
    display:"flex",
    flexDirection:"row", borderColor:'#000', borderWidth:1, borderRadius: 5}}>
          <View>
          <Avatar icon={{ name: 'home', color: blue, type: 'font-awesome', size:30 }}  />
          </View>

          <View style={{marginLeft:10}}>
          <Text style={styles.menuItemText}>Home</Text>
          </View>
        </LinearGradient>

        <View style={{height:2 , backgroundColor:'#fff', width:'90%', marginVertical:10,alignSelf:'center'}} />
          
        </TouchableOpacity>
        
     

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            this.props.navigation.navigate('Orders')}

        >
         <View>
          <Avatar icon={{ name: 'list', color: '#fff', type: 'font-awesome', size:25  }}  />
          </View>

          <View style={{marginLeft:10}}>
          <Text style={styles.menuItemText}>Order</Text>
          </View>

        </TouchableOpacity>

        <View style={{height:2 , backgroundColor:'#fff', width:'80%', marginVertical:10,alignSelf:'center'}} />
        
      
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>  this.props.navigation.navigate('Contact')}
        >


         <View>
          <Avatar icon={{ name: 'phone', color: '#fff', type: 'font-awesome', size:25  }}  />
          </View>

          <View style={{marginLeft:10}}>
          <Text style={styles.menuItemText}>Contact</Text>
          </View>
          
        </TouchableOpacity>
        
      </ImageBackground>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  },
  menuItem: {
    padding: 10,
    // justifyContent: "center",
    // backgroundColor: "rgba(12, 12, 12, 0.2)",
    marginBottom: 2,
    display:"flex",
    flexDirection:"row",
  },
  menuItemText: {
    fontSize: 20,
    fontWeight:"bold",
    top:2,
    color: yellow
  }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;