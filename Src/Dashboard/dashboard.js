import React from 'react'
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground, Alert } from 'react-native'

import HomeBack from '../../assets/homeSlide.png'
import Pluberimage from "../../assets/plumber.png"
import Electricimage from "../../assets/Electrician.png"
import Fumiimage from "../../assets/fumigation.png"
import ITImg from "../../assets/CCTv.png"
import AcImg from "../../assets/AC.png"
import paintImg from "../../assets/paint.png"
import slideImage from "../../assets/homeSlide.png"
import CarpenterImg from "../../assets/Carpenter.png"
import homeButton from "../../assets/homeButton.png"
import homeButton2 from "../../assets/homeButton2.png"

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    image: Pluberimage,
                    navigate: "Plum",
                    name: "No Item Found",
                    key: 1
                },
                {
                    image: Electricimage,
                    navigate: "Elec",
                    name: "No Item Found",
                    key: 2
                },
                {
                    image: Fumiimage,
                    navigate: "Fumi",
                    name: "No Item Found",
                    key: 3
                },
                {
                    image: ITImg,
                    navigate: "IT",
                    name: "No Item Found",
                    key: 4
                },
                {
                    image: AcImg,
                    navigate: "AC",
                    name: "No Item Found",
                    key: 5
                },
                {
                    image: paintImg,
                    navigate: "Painter",
                    name: "No Item Found",
                    key: 6
                },
                {
                    image: CarpenterImg,
                    navigate: "Car",
                    name: "No Item Found",
                    key: 7
                },

            ],

            categoryData : [
                {
                    name: 'Tap',
                    data: [
                        {id: 1,name:"Normal Tap", amount:500, checked: false},
                        {id: 2,name:"Mixer tap", amount:1000,checked: false},
                        {id: 3,name:"VOLE", amount:400,checked: false},
                        {id: 4,name:"Muslim Shower Change/Repair", amount:600,checked: false},
                        {id: 5,name:"Pressure in taps", amount:600,checked: false},
                        {id: 6,name:"Sink/Basin/installation/Replacement", amount:350,checked: false},
                        {id: 7,name:"Sensor Taps Work", amount:600,checked: false},
                        {id: 8,name:"Taps Change", amount:600,checked: false},
                     ],
                     show: false
                },
                {
                    name: 'Tank',
                    data: [
                        {id: 9,name:"Tank", amount:4000, checked: false},
                        {id: 10,name:"TUnky Fiting", amount:3000,checked: false},
                     ],
                     show: false
                },
                {
                    name: 'geyser',
                    data: [
                        {id: 11,name:"Geyser Repair", amount:1500,checked: false},
                        {id: 12,name:"Geyser Service", amount:600,checked: false},
                        {id: 13,name:"Geyser Installation", amount:2000,checked: false},
                      ],
                    show: false
                },
            ]
        }
    }


    componentDidMount = () => {
        

        fetch('https://tabdeli.com/fixit/api/view_categories_api.php')
        .then(response => response.json())
        .then(data => {
            console.log('data', data)
            if(data.status) {
                this.setState({
                    items: data.categories
                })
            }else{
                this.setState({
                    items: this.state.items
                })
            }
        })
        .catch(err => console.log('err', err))
        
        
        
    }


    getsubCat = (id, name) => {

        fetch(`https://tabdeli.com/fixit/api/view_sub_categories_api.php?cat_id=${id}`)
        .then(response => response.json())
        .then(data => {
            if(data.status) {
                // this.setState({
                //     items: data.categories
                // })
                console.log('data', data)

                this.props.navigation.navigate('Services', {
                    catData : data.categoryData,
                    serviceName: name
                    })
            }
            else{
                Alert.alert("Alert", data.message)
                console.log('data', data)

            }
        })
        .catch(err => console.log('err', err))

    }



    render() {
        console.log('this.state.items', this.state.items)
        return (
            <View style={{ backgroundColor: '#000', width: '100%', height: '100%' }}>
                <ScrollView>
                    <View>
                        <Image source={HomeBack} style={{ width: '100%', height: 270 }} />
                    </View>

                    <View style={{ flex: 1, width: '100%', marginTop: -45 }}>
                        <FlatList style={{ flex: 1, alignSelf: 'center' }}
                            data={this.state.items}
                            renderItem={({ item, index }) => {
                                console.log('index', item.image_destination)
                                if (index === 0) {
                                    return (
                                        <TouchableOpacity  style={{ width: 140, marginLeft: '10%', paddingVertical: 10 }} onPress={() => this.getsubCat(item.id, item.name)}>
                                            <ImageBackground source={homeButton2} style={{ height: 135, width: "100%", right: 20, borderRadius: 10 }}>
                                                <View style={{}}>
                                                    <Image style={{
                                                        justifyContent: 'center',
                                                        alignSelf:'center',
                                                        alignItems: 'center',
                                                        height: 100,
                                                        width: 100,
                                                        // left: 7
                                                    }} source={{uri:item.image_destination}} />
                                                    <Text style={{ alignItems: "center", alignContent: "center", color: '#4D4D4D', alignSelf: 'center', fontSize: 12 }}>{item.name}</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    )
                                } else {
                                    return (
                                        <TouchableOpacity style={{ width: 140, marginLeft: '10%', paddingVertical: 10 }} onPress={() => this.getsubCat(item.id, item.name)}>
                                            <ImageBackground source={homeButton} style={{ height: 135, width: "100%",  right: 20, borderRadius: 10 }}>
                                                <View style={{}}>
                                                    <Image style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        height: 100,
                                                        width: 100,
                                                        // left: 7
                                                        alignSelf:'center'
                                                    }} source={{uri:item.image_destination}} />
                                                    <Text style={{ alignItems: "center", alignContent: "center", color: '#fff', alignSelf: 'center', fontSize: 12 }}>{item.name}</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    )
                                }
                            }}
                            //Setting the number of column
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />
                    </View>

                </ScrollView>
            </View>
        )
    }
}


export default Dashboard