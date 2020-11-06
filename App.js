import React from 'react'
import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import Navigator from './Src/Navigation/navigator'
import Video from 'react-native-video';
import splash from './assets/splash.mp4'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      splashBool: true
    }
  }



  render() {
    return(
      <View style={{flex: 1}}>
      
        {!this.state.splashBool ? <Navigator />
          :
        <Video source={splash}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}
                        fullscreen
                        resizeMode="cover"                                   // Store reference
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          // height: '100%'
                      }}
                        onEnd={(status) => {
                          console.log("OnEnd", status)
                          this.setState({ splashBool: false })

                      }}

                        onVideoEnd={(status) => {
                          console.log("OnEnd", status)
                          this.setState({ splashBool: false })

                        }}
                    />}
      </View>
    )
  }
}