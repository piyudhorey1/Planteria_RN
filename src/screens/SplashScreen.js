import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Video source={require('../assets/backgrounds/background_video_plants.mp4')} style={StyleSheet.absoluteFillObject} resizeMode='cover' repeat={true} muted={true}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
