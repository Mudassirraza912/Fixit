import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Linking} from 'react-native';
import plumberBack from '../../assets/plumberBack.png'

class Contact extends React.Component{
    constructor(props) {
        super(props)
    }



    render() {
       return (
      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Linking.openURL('tel:001 647 376 6811')}>
              <ImageBackground
          resizeMode='contain'
          
          source={require('../../assets/CallUs.jpg')}
          style={styles.imageStyle}>
       
          </ImageBackground>

            
        </TouchableOpacity>

 

        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Linking.openURL('mailto:info@fixitway.com')}>
    
    <ImageBackground
          resizeMode='contain'
          
          source={require('../../assets/Email.jpg')}
          style={styles.imageStyle}>
       
          </ImageBackground>
 </TouchableOpacity>
    
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Linking.openURL('sms:001 647 376 6811')}>
             <ImageBackground
          resizeMode='contain'
          
          source={require('../../assets/SMS.jpg')}
          style={styles.imageStyle}>
       
          </ImageBackground>
        </TouchableOpacity>
 
        {/*To open a web URL function(address = null)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Linking.openURL('http://144.91.70.164/~fexit/')}>
            <ImageBackground
          resizeMode='contain'
          
          source={require('../../assets/Browse.jpg')}
          style={styles.imageStyle}>
       
          </ImageBackground>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );

    }
}



var styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: "#000",
      padding: 16,
    },
    headingStyle: {
      fontSize: 25,
      textAlign: 'center',
      padding: 30,
    },
    button: {
      justifyContent: 'center',
      width : 130,
      backgroundColor:"#FFFFFF",
      marginTop : 20,
      borderRadius: 10
    },
    text: {
      fontSize: 18,
      textAlign : 'center',
      padding : 10,
      color : '#ffffff',
    },
    imageStyle:
    {
      width:133,
      height:150,
      

    
      
      
    },
  })

export default Contact