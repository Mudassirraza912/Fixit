import React from 'react'
import {View, Text, Image, Animated, ScrollView, TouchableOpacity} from 'react-native'
import tabdeli from '../../assets/tabdeli.png'
import {Icon,Button, Card} from 'react-native-elements'
import {Input, Label,Item} from "native-base"
import LinearGradient from 'react-native-linear-gradient';

class Orders extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: false,
            number:false,
            shift: new Animated.Value(0),
            }
    }


    userdetails=()=>{
        fetch(`https://tabdeli.com/fixit/api/order_api.php?action=select_order&phone_number=${this.state.number}` , {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           alert(responseJson.message)
           console.log("responseJson responseJson",responseJson);
           if(responseJson.status == true){
              this.setState({
                 data: responseJson
              })
           }
          
        })
        .catch((error) => {
           alert(error.message)
           console.error(error);
        });
     }


    render() {
        const {data} = this.state
    if(!this.state.data) {
        return(
            <View style={{height:'100%', width:'100%', backgroundColor:'#000', alignItems:'center'}}>
                <ScrollView>
                <View style={{alignItems:'center', marginTop:'20%'}}>
                    <Image source={tabdeli} style={{height:150, width:300}} />
                </View>

                <Item floatingLabel style={{ width: "80%", borderBottomColor: '#fff' , marginTop:'20%', alignSelf:'center'}}>
                          <Label style={{color: '#fff'}}>Phone Number</Label>
                          <Input multiline  onChange={(e) => { this.setState({ number: e.nativeEvent.text }) }} value={this.state.number}  
                style={{padding: 10, width:"100%", color: '#fff'}} 
                />
            </Item>


            <TouchableOpacity
                style={{width:'90%', alignSelf:'center', marginTop:'20%'}}
                onPress={() =>  this.userdetails()}
                >
                <LinearGradient start={{x: 0, y: 1}} end={{x: 1.2, y: 0}}colors={['#4d4d4d', '#ffffff', '#000']} style={{ padding: 10,marginBottom: 2, borderColor:'#000', borderWidth:1, borderRadius: 5}}>
                

                      <Text style={{textAlign:'center'}}>Get Order</Text>
                </LinearGradient>
        </TouchableOpacity>
                </ScrollView>
            </View>
        )

    }else {
        return(
            <View style={{height:'100%', width:'100%', backgroundColor:'#000', alignItems:'center'}}>
                <ScrollView>
         {data.data.map((val, key) =>{
            return <Card key={key} containerStyle={{borderRadius: 20}}
            >
               
                <View style={{alignContent:"center",alignItems:"center",top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                        {val.service_name}
                    </Text>
                </View>

                <View style={{top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Name :</Text> {val.name}
                    </Text>
                </View>

                <View style={{top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Email :</Text> {val.email}
                    </Text>
                </View>


                <View style={{top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Phone No :</Text> {val.phone}
                    </Text>
                </View>


                <View style={{top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Address :</Text> {val.address}
                    </Text>
                </View>

                <View style={{ top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Date :</Text> {val.date}
                    </Text>
                </View>

                <View style={{ top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Timing :</Text> {val.slot}
                    </Text>
                </View>

                <View style={{  top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Total Amount :</Text> {val.total_amount} CAD
                    </Text>
                </View>

                <View style={{top: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, }}>
                     <Text style={{color:"gray"}}>Order No :</Text> {val.orderid}
                    </Text>
                </View>

            </Card>
         })}
      </ScrollView>

            </View>
        )
    }
       
    }
}


export default Orders