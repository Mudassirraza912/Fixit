import React from 'react'
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground, Alert, RefreshControl } from 'react-native'

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
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
            scrollLoader: false,
            items: [

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

        this.setState({loader: true})
        fetch('https://tabdeli.com/fixit/api/view_categories_api.php')
        .then(response => response.json())
        .then(data => {
            if(data.status) {
                this.setState({
                    items: data.categories
                })
            }
        this.setState({loader: false})
        })
        .catch(err => {
            this.setState({loader: false})
            console.log('err', err)
        })
        
        
        
    }


    getsubCat = (id, name) => {
        this.setState({scrollLoader: true})

        fetch(`https://tabdeli.com/fixit/api/view_sub_categories_api.php?cat_id=${id}`)
        .then(response => response.json())
        .then(data => {
            if(data.status) {
                // this.setState({
                //     items: data.categories
                // })
                console.log('data', data)
                this.setState({scrollLoader: false})
                this.props.navigation.navigate('Services', {
                    catData : data.categoryData,
                    serviceName: name
                    })
            }
            else{
                Alert.alert("Alert", data.message)
                console.log('data', data)
                this.setState({scrollLoader: false})


            }
        })
        .catch(err => {
            console.log('err', err)
            this.setState({scrollLoader: false})

        })

    }



    render() {
        const { loader, scrollLoader } = this.state
        return (
            <View style={{ backgroundColor: '#000', width: '100%', height: '100%' }}>
                <ScrollView refreshControl={
                            <RefreshControl
                            tintColor="#fff"
                            titleColor="#fff"
                            progressBackgroundColor="#fff"
                            accessibilityIgnoresInvertColors={true}
                            refreshing={scrollLoader } onRefresh={() => {
                            }} />}> 
                    <View>
                        <Image source={HomeBack} style={{ width: '100%', height: 270 }} />
                    </View>

                    <View style={{ flex: 1, width: '100%', marginTop: -45 }}>
                     {!loader ?  
                      <FlatList
                        style={{ flex: 1, alignSelf: 'center' }}
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
                        
                        : 
                        
                        <FlatList style={{ flex: 1, alignSelf: 'center' }}
                            data={[1,2,3,4,5,6]}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => {
                                return(
                                    <SkeletonPlaceholder backgroundColor="grey" speed={1200}>
                                        <TouchableOpacity style={{ width: 140, marginLeft: '10%', paddingVertical: 10 }}>
                                             <View style={{ height: 135, width: 150,  right: 20, borderRadius: 10 }} />
                                        </TouchableOpacity>
                                    </SkeletonPlaceholder>
                                )
                            }}

                            />
                                
                        }
                    </View>

                </ScrollView>
            </View>
        )
    }
}


export default Dashboard