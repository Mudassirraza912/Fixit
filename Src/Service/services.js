import React from 'react'
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import plumberBack from '../../assets/plumberBack.png'
import {Icon} from "react-native-elements"
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, CheckBox,Button, Accordion} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { call } from 'react-native-reanimated';
class Services extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            catData : [],
            cart:[], 
            totalamount: 0,
        }
    }

    componentDidMount = () => {
        const catData = this.props.navigation.getParam('catData');
        this.setState({catData: catData, cart: []})
    }

    toggleShowButton = (v, i) => {
        const { catData } = this.state
        catData[i].show = !catData[i].show
        this.setState({
            catData
        })
    }


    addCart = (value, index, val, ind) => {
        var { catData, cart, totalamount } = this.state
        catData[index].data[ind].checked = !catData[index].data[ind].checked
        var amount = 0
        cart = []
        catData.map(v1 => {
            v1.data.map(v2 => {
                if(v2.checked) {
                    cart.push(v2)
                }
            })
        })

        this.setState({
            catData, cart
        })
    }
    



    render() {
        var { catData, cart, totalamount} = this.state
        const serviceName = this.props.navigation.getParam('serviceName');
        console.log('serviceName', serviceName)

        cart.map(v1 => {
            totalamount += Number(v1.price)
        })
      
        return(
            <View style={{flex: 1, height:'100%', width:'100%', backgroundColor:"#000"}}>
                <ImageBackground source={plumberBack} style={{height:'95%', width:'100%'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 15}}>
                       <Text style={{color:'#fff'}}>
                            cart Item : {cart.length}
                       </Text>

                       <Text style={{color:'#fff'}}>
                            Total Amount : {totalamount}
                       </Text>
                    </View>
                    <ScrollView>
                       {catData && <View style={{justifyContent:'center', alignContent:'center'}}>
                            {catData.map((value, index) => {
                                return(
                                    <View>

                                    <TouchableOpacity
                                    onPress={() => this.toggleShowButton(value, index)}
                                    style={{width:'90%', alignSelf:'center', paddingVertical:10}}>
                                        <LinearGradient  start={{x: 0, y: 2}} end={{x: 1.2, y: 1.2}}colors={['#4d4d4d', '#ffffff', '#000']} style={{ padding: 10, borderColor:'#000', borderWidth:1, borderRadius: 5}}>
                                            <Text style={{textAlign:'center', fontWeight:'bold'}}>{value.name}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>

                                    
                                {value.show &&    <View>
                                          {value.data.map((val, ind) =>{
                                             return(
                                                <View key={ind}>
                                              <List>
                                                <ListItem  onPress={() => {this.addCart(value, index, val, ind)}} avatar>
                                                  <Left>
                                                    <Text></Text>
                                                    <Text></Text>
                                                    {/* <Thumbnail source={val.icon} /> */}
                                                  </Left>
                                                  <Body>
                                                    <Text></Text>
                                                    <Text note></Text>
                                                    <Text style={{color:'#FFF'}} note>{val.name}</Text>
                                                  </Body>
                                                  <Right style={{display:"flex", flexDirection:"row", borderBottomColor: ''}}>
                                                  <Text style={{color:'#FFF'}} note>CAD: {val.price}</Text>
                                                    <CheckBox  style={{borderRadius:100}} checked={val.checked} color="green"/>
                                                  </Right>
                                                </ListItem>
                                              </List>
                                              </View>)
                                          })}
                                          </View>}
                                    





                                  </View>


                                )
                            })}
                        </View>}
                    </ScrollView>
                </ImageBackground>

               {cart.length > 0 && <TouchableOpacity
          style={{width:'90%', alignSelf:'center', marginTop:-20}}
          onPress={() => {this.props.navigation.navigate('PlaceOrder', {
            order: cart,
            serviceName: serviceName,
            totAmount : totalamount
          })}}
        >
        <LinearGradient  start={{x: 0, y: 1}} end={{x: 1.2, y: 0}}colors={['#4d4d4d', '#ffffff', '#000']} style={{ padding: 10,
        marginBottom: 2,
        borderColor:'#000', borderWidth:1, borderRadius: 5}}>
         
          <Text style={{textAlign:'center'}}>Continue</Text>
        </LinearGradient>

        <View style={{height:2 , backgroundColor:'#fff', width:'90%', marginVertical:10,alignSelf:'center'}} />
          
        </TouchableOpacity>}
                
            </View>
        )
    }
}


export default Services