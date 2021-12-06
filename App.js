import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Button, Platform, SafeAreaView, StyleSheet, Text, View, Pressable, useRef, useState} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-ico-material-design';

const App = () => {
  const webview = useRef();


  return (
    
    
    
    <WebView
            ref={webview}
            onNavigationStateChange={handleNavigationStateChanged}
            source={{ uri: 'https://restrun.ru/' }}
        />



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;