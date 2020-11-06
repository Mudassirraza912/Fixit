import React from 'react'
import { Text, View, ScrollView, TextInput, Dimensions,  Keyboard, Animated, UIManager, TouchableOpacity, Alert} from 'react-native'
import { Container, Content, Form, Item, Input, Label, Picker, DatePicker } from 'native-base'
import Geolocation from '@react-native-community/geolocation';
import {Icon, Button } from 'react-native-elements'
const yellow = "#fff"
const blue = "#000"
import LinearGradient from 'react-native-linear-gradient';
class PlaceOrder extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            number:'',
            address:'',
            latitude:'',
            longitude:'',
            location:'',
            searchLocation: false,
            data:'',
            time:'',
            shift: new Animated.Value(0),
            date: false
      
          }
    }


    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this._getLocationAsync()
        
      }
    
      _getLocationAsync = async () => {
        const {longitude, latitude} = this.state
        Geolocation.getCurrentPosition(location => {
           this.setState({ latitude: location.coords.latitude, longitude: location.coords.longitude, location: location.coords  })
          })
    
      };
    
    
      tracker = async () => {
        // console.log('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.latitude + ',' + this.state.longitude + '&key=AIzaSyA2J_Jl0o3MN_QfkZ55BnF128lpTzO6CxY')
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.latitude + ',' + this.state.longitude + '&key=AIzaSyBZKJx8TmPHryjGnjWiY8FNjnmLBs4FYpE')
          .then((response) => response.json())
          .then((responseJson) => {
            var address = JSON.stringify(responseJson)
             var AddressObj = JSON.parse(address)
             console.log("location location location", AddressObj)
            
             
              this.setState({address: AddressObj.results[0].formatted_address})
    })
    
      
      }
    
    
      serachLoc = (e) => {
        // this.tracker()
        const { longitude, latitude, PickerValue } = this.state
        var searchTerm = e.nativeEvent.text
        this.setState({ address: searchTerm })
        fetch(`https://api.foursquare.com/v2/venues/search?client_id=ZJWQ050MTAJAQVAU2GHBN2WI3EIJJ1ZKNNBWTF1CYLVKKRA0&client_secret=NNAT41FP4ZLRDDE2QPNVMNAS4GFKICS5R0Z2DQ4MKFEW1SVT&v=20180323&ll=${latitude},${longitude}&query=${searchTerm}&limit=5`)
            .then(response => response.json())
            .then(data => {
                console.log("data.response data.response data.response data.response", data.response)
                searchTerm !== '' ?
                    (this.setState({
                        searchLocation: data.response.venues,
                    })) :
                    (this.setState({
                        searchLocation: null,
    
                    }))
            })
            .catch(err => console.log(err))
    }
    
    
    
    // userRegister=()=>{
  
    //     if (this.state.name === "") {
    //       // this.setState(() => ({ nameError: "Name required." }));
    //       alert("Name required.")
    //     } else  if (this.state.email === "") {
    //       // this.setState(() => ({ emailError: "Email required." }));
    //       alert("Email required.")
      
    //     }else  if (this.state.address === "") {
    //       // this.setState(() => ({ addressError: "Address required." }));
    //       alert("Address required.")
      
    //     }else  if (this.state.number === "") {
    //       // this.setState(() => ({ cellError: "Cell no required." }));
    //       alert("Cell no required.")
      
    //     }else  if (this.state.date === false) {
    //       // this.setState(() => ({ dateError: "Select a Date." }));
    //       alert ("Select a Date.")
      
    //     }
    //     else  if (this.state.time === "") {
    //       // this.setState(() => ({ PickerValueError: "Please Select a Time" }));
    //       alert ("Select a Date.")
    //     }
    //     else {  
        
    //       var order = this.props.navigation.getParam('order');
    //       var serviceName = this.props.navigation.getParam('serviceName');
    //       var totAmount = this.props.navigation.getParam('totAmount');
      
    //         const { name }  = this.state ;
    //         const { email }  = this.state ;
    //         const { address }  = this.state ;
    //         const { number }  = this.state ;
    //         // const {  }  = this.state ;
    //         const {date} = this.state;
    //         // const {Works}= this.state;
    //         const {time} = this.state;
      
    //         console.log("fdfgghgjfghf",name,email,address,number,date,time,order, totAmount, serviceName)
    //         const formData = new FormData();
           
      
    //         formData.append("action", 'add_order')
      
    //         formData.append("name", name), 
    //         formData.append("email", email)
    //         formData.append("address", address)
    //         formData.append("phone_number", number)
    //         formData.append("time", '07:00 AM')
    //         formData.append("service", ['abc'])
    //         formData.append("date", 'may-17-2020')
    //         formData.append("total_amount", totAmount)
    //         formData.append("service_name", serviceName)
      
        
      
    //         console.log("formData", formData, order)
    //         fetch("https://tabdeli.com/fixit/api/order_api.php", {
    //             method: 'POST',
    //             dataType: "json",
    //             headers: {
    //               'Accept': 'application/json',
    //               'Content-Type': 'application/x-www-form-urlencoded'
    //             },
            
    //             body: `action=add_order&name=${name}&email=${email}&address=${address}&phone_number=${number}&time=${time}&service=${order}&date=${date}&total_amount=${totAmount}&service_name=${serviceName}`
    //         }).then(res => res.json())
    //         .then(resp => {
    //           console.log(resp)
    //             var successData = resp
    //             console.log("successData successDatasuccessData",successData)
    //             //   this.props.navigation.navigate("Dashboard")

    //             // if(successData.status == true){
    //             //   this.props.navigation.navigate("Dashboard")
    //             //   Alert.alert("Alert","Order Inserted Succesfully")
    //             // }
    //         })
    //         .catch(err => console.log("err errerr err",err));
      
        
    //        }
    //       }


          userRegister=()=>{
  
            if (this.state.name === "") {
              // this.setState(() => ({ nameError: "Name required." }));
              alert("Name required.")
            } else  if (this.state.email === "") {
              // this.setState(() => ({ emailError: "Email required." }));
              alert("Email required.")
          
            }else  if (this.state.address === "") {
              // this.setState(() => ({ addressError: "Address required." }));
              alert("Address required.")
          
            }else  if (this.state.number === "") {
              // this.setState(() => ({ cellError: "Cell no required." }));
              alert("Cell no required.")
          
            }else  if (this.state.date === false) {
              // this.setState(() => ({ dateError: "Select a Date." }));
              alert ("Select a Date.")
          
            }
            else  if (this.state.time === "") {
              // this.setState(() => ({ PickerValueError: "Please Select a Time" }));
              alert ("Select a Date.")
            }
            else {  
            
              var order = this.props.navigation.getParam('order');
              var serviceName = this.props.navigation.getParam('serviceName');
              var totAmount = this.props.navigation.getParam('totAmount');
          
                const { name }  = this.state ;
                const { email }  = this.state ;
                const { address }  = this.state ;
                const { number }  = this.state ;
                // const {  }  = this.state ;
                const {date} = this.state;
                // const {Works}= this.state;
                const {time} = this.state;
          
                console.log("fdfgghgjfghf",name,email,address,number,date,time,order, totAmount, serviceName)
                const formData = new FormData();
               
          
                // formData.append("action", 'add_order')
          
                formData.append("name", name), 
                formData.append("email", email)
                formData.append("address", address)
                formData.append("phone_number", number)
                formData.append("time", '07:00 AM')
                formData.append("service", ['abc'])
                formData.append("date", 'may-17-2020')
                formData.append("total_amount", totAmount)
                formData.append("service_name", serviceName)
          
            
          
                console.log("formData", formData, order)
                fetch("https://tabdeli.com/fixit/api/order_api.php?action=add_order", {
                    method: 'POST',
                    dataType: "json",
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                
                    body: `action=add_order&name=${name}&email=${email}&address=${address}&phone_number=${number}&time=${time}&service=${order}&date=${date}&total_amount=${totAmount}&service_name=${serviceName}`
                }).then(res => res.json())
                .then(resp => {
                  console.log(resp)
                    var successData = resp
                    console.log("successData successDatasuccessData",successData)
                    if(successData.status == true){
                      alert ("Order Inserted Succesfully")
                      this.props.navigation.navigate("Dashboard")
                    }
                })
                .catch(err => console.log("err errerr err",err));
          
            
               }
              }
          
          



    render() {
      const { navigation } = this.props;
      const order = navigation.getParam('order');
      const serviceName = navigation.getParam('serviceName');
      const totAmount = navigation.getParam('totAmount');
        return(
            <View style={{height:'100%', width:'100%', backgroundColor:'#000'}}>
                
            <View style={{display:"flex", flexDirection:"row", height:30}}>
              <Text style={{color:"#fff", marginLeft:"5%"}}>Service Name</Text>
              <Text style={{color:"#fff", marginLeft:"50%"}}>{serviceName}</Text>
          </View>

        <View style={{display:"flex", flexDirection:"row", backgroundColor:'#fff', height:25}}>
              <Text style={{color:"#000", marginLeft:"5%"}}>Name</Text>
              <Text style={{color:"#000", marginLeft:"70%"}}>Amount</Text>
          </View>
          
          <View>
              <View>
              {order.map((val) => {
            return(
                 <View style={{display:"flex", flexDirection:"row"}}>
              <Text style={{marginLeft:"5%", width:"40%", color: yellow}}>{val.name}</Text>
              <Text style={{marginLeft:"40%", color: yellow}}>{val.price}</Text>
             </View>
            )})}
              </View>

</View>
<View >
<LinearGradient  start={{x: 0, y: 1}} end={{x: 1.2, y: 0}}colors={['#4d4d4d', '#ffffff', '#000']} style={{display:"flex", flexDirection:"row", padding:10}}>
              <Text style={{color:"#fff", marginLeft:"5%"}}>Total Amount</Text>
              <Text style={{color:"#fff", marginLeft:"60%"}}>{totAmount}</Text>
            </LinearGradient>
          </View>

          <ScrollView>
          {/* <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} > */}
            <View>
                <Form style={{marginTop: 20,padding :20,}}>
                    <Item floatingLabel style={{ width: "80%", bottom: 30, borderBottomColor: yellow  }}>
                          <Label style={{color:yellow}}>Your Name</Label>
                        <Input multiline  onChange={(e) => { this.setState({ name: e.nativeEvent.text }) }} value={this.state.name}  
                style={{padding: 10, width:"100%", color: yellow}} 
                />
                    </Item>
                    <Item floatingLabel style={{ width: "80%", bottom: 30 ,borderBottomColor: yellow }}>
                          <Label style={{color:yellow}}>Your Email</Label>
                          <Input multiline  onChange={(e) => { this.setState({ email: e.nativeEvent.text }) }} value={this.state.email}  
                style={{padding: 10, width:"100%", color: yellow}} 
                />
                    </Item>
                    <Item floatingLabel style={{ width: "80%", bottom: 30 ,borderBottomColor: yellow }}>
                          <Label style={{color:yellow}}>Your Phone</Label>
                          <Input  multiline  onChange={(e) => { this.setState({ number: e.nativeEvent.text }) }} value={this.state.number}  
                style={{padding: 10, width:"100%", color: yellow}} 
                />
                    </Item>


                  <View style={{flex: 1,justifyContent:"center",alignContent:"center",borderColor : "#4d4d4d", borderWidth:2, borderRadius: 10, backgroundColor:"#bdbdbd"}}>
                 <DatePicker
                        // date={this.state.date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        placeHolderTextStyle={{color: yellow, fontWeight:'bold', textAlign:'center'}}
                        textStyle={{color: yellow, fontWeight:'bold', textAlign:'center'}}
                        format="DD-MM-YYYY"
                        minDate="01-01-2019"
                        maxDate="01-01-2050"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                        }}
                        onDateChange={(date) => {this.setState({date: date.toString().substr(4, 12)})}}
                        underlineColorAndroid="#f55f2a" />
                       {/* {this.state.date && <Text style={{alignContent:"center", alignItems:"center"}}>
                      Date: {this.state.date.toString().substr(4, 12)}
                 </Text>} */}

                 </View>
                   
        <View style={{width:'100%', borderColor : "#4d4d4d", backgroundColor:"#bdbdbd", borderWidth:2, marginTop: 10, borderRadius: 10}}>

                <Picker
                  style={{width:'100%', borderColor : yellow, borderWidth:2, color: yellow}}
                  selectedValue={this.state.time}
                  onValueChange={(itemValue,itemIndex)=> this.setState({ time:itemValue})}>
                    <Picker.Item label="Timings" value=""/>
                    <Picker.Item label="11AM - 1PM" value="11AM"/>
                    <Picker.Item label="1PM- 3PM" value="1PM"/>
                    <Picker.Item label="3PM- 5PM" value="3PM"/>
                    <Picker.Item label="5PM- 7PM" value="5PM"/>

                  </Picker>

                  </View>

<View style={{display:"flex", flexDirection:'row', paddingBottom:20}}>
        
          <Item floatingLabel style={{borderBottomColor: yellow,width:"80%"}} >
            <Label style={{color: yellow}}>Your Address</Label>
                 <Input multiline onChange={this.serachLoc} value={this.state.address}  
                style={{padding: 10, width:"100%", color: yellow}} 
                />
                </Item>
               
        <Item style={{borderBottomColor: yellow}}>
          <Button onPress={this.tracker}  icon={<Icon name="location-searching" color={blue} />} containerStyle={{backgroundColor: yellow}} buttonStyle={{backgroundColor: yellow}}/>
        </Item>
        
      </View>

    {this.state.searchLocation &&  <View>
      {this.state.searchLocation.length >=1 && <View>
        {this.state.searchLocation.map((val,key) => {
          return(
            <View key={key} style={{alignSelf: 'center'}}>
              <Button title={val.name} onPress={() => {
             this.setState({
                address: val.name,
                searchLocation: false
            })
        }} containerStyle={{ width: "80%" }} buttonStyle={{ backgroundColor:  yellow, borderRadius: 8 }} titleStyle={{ color:  blue }} />
            </View>
          )
        })}
      </View>}

      </View>
}

     
          {/* <View>
            <Button onPress={this.userRegister} buttonStyle={{backgroundColor: yellow,borderRadius: 10, marginVertical: 15}} style={{justifyContent:"center",alignContent:"center", width:"80%", borderRadius: 10}} title="Appointment" titleStyle={{color: blue}}/>
          </View> */}



<TouchableOpacity
          style={{width:'95%', alignSelf:'center'}}
          onPress={this.userRegister}
        >
        <LinearGradient  start={{x: 0, y: 1}} end={{x: 1.2, y: 0}}colors={['#4d4d4d', '#ffffff', '#000']} style={{ padding: 10,
    marginBottom: 2, borderColor:'#000', borderWidth:1, borderRadius: 5}}>
         <Text  style={{textAlign:'center'}}>Appointment</Text>
        </LinearGradient>

          
        </TouchableOpacity>

                </Form>
            </View>
          </ScrollView>
            </View>
        )
    }
}


export default PlaceOrder