import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

var Sound = require('react-native-sound');
// import Sound from "react-native-sound"

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = () => {
  

  const playSound = (sound) => {
    var soundVar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('Failed to load the sound', err);
        return ; 
      }
    });
    setTimeout(() => {
      soundVar.play();
    }, 100);
  soundVar.release(); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.text}>Sound App</Text>
        <View style={styles.gridContainer}>
          {soundList.map(sound => (
            <TouchableOpacity
              key={sound}
              style={styles.box}
              onPress={() => {
                playSound(sound);
              }}>
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b262c',
  },
  logo: {
    marginTop: 10,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  box: {
    height: 110,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#0f4c75',
    borderRadius: 6,
    shadowColor: '#393e46',
  },
});
