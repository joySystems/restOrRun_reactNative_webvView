import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';

import {ActivityIndicator, Button, Platform, SafeAreaView, StyleSheet, Text, View, Pressable,  BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-ico-material-design';

const iconWidth = 24;
const iconHeight = 24;

function LoadingIndicatorView() {

  console.log("Indicator changed");
  return <ActivityIndicator color='#009b88' size='large' />
}



const App = () => {
  const webview = useRef();
  const [hasInjectedVariable, setHasInjectedVariable] = useState(false);
  const [targetUrl, setTargetUrl] = useState('https://restrun.ru/');
  const [keyState, setKeyState] = useState(1);

  const handleNavigationStateChanged = (event) => {
    if(!event.loading && !hasInjectedVariable){
        webview.current.injectJavaScript('window.isNative = true');
        setHasInjectedVariable(true);
    }
}




  return (
    
    
    <SafeAreaView style = {styles.container} >
       <StatusBar backgroundColor = "#ffffff"  />
        <WebView
            style = {{flex:0.92, marginTop: 25}}
            ref={webview}
            onNavigationStateChange={handleNavigationStateChanged}
            source={{ uri: targetUrl }}
            allowsBackForwardNavigationGestures
            originWhitelist = {
              ["https://*", "http://*", "file://*", "sms://*"]
            }
            renderLoading={LoadingIndicatorView}
        />

<View style = {[styles.NavContainer, styles.elevation]} >

      <View style = {[styles.NavBar]}>

      <Pressable onPress = {
        () => {
          if (targetUrl == 'https://restrun.ru/'){
          setTargetUrl('https://restrun.ru/#popup-address');
        }else{
          setTargetUrl('https://restrun.ru/');
        }
          setKeyState(keyState+1);
        }
      }
      style = {
        [styles.IconBehave]
      }
      android_ripple = {
        {
          borderless: true,
          radius: 50
        }
      } >


      <Icon name = "home-button"
      height = {
        iconHeight
      }
      width = {
        iconWidth
      }
      color = "#ff6347" / >

      </Pressable>

      <Pressable onPress = {
        () => {
          webview.current.injectJavaScript('document.querySelector(".header__login a.header__btn").click(); true;');
        }
      }
      style = {
        [styles.IconBehave]
      }
      android_ripple = {
        {
          borderless: true,
          radius: 50
        }
      } >

      <Icon name = "map-placeholder"
      height = {
        iconHeight
      }
      width = {
        iconWidth
      }
      color = "#ff6347" / >


      </Pressable>

      <Pressable onPress = {
        () => {
          webview.current.injectJavaScript('document.querySelector(".header__login a.header__login-enter").click(); true;');
        }
      }
      style = {
        [styles.IconBehave]
      }
      android_ripple = {
        {
          borderless: true,
          radius: 50
        }
      } >

      <Icon name = "user-shape"
      height = {
        iconHeight
      }
      width = {
        iconWidth
      }
      color = "#ff6347" / >

      </Pressable> 
      </View> 
      </View>



     </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  NavContainer: {
    flex: 0.08,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: "rgba(52,58,64,.1)",
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,


  },


  elevation: {
    elevation: 20,
    shadowColor: '#000',

  },
  NavBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f8f9fa'
  },


  IconBehave: {

    padding: 20,


  }

});


export default App;