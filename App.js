import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export function ColorSlider({value, setValue}){
  return(
    <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={255}
      value={value}
      step={1}
      onValueChange={(newValue)=>{setValue(newValue)}}
    />
  )
}

const toHex = (value) => value.toString(16).padStart(2, '0')

export default function App() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const rgbString = `rgb(${red}, ${green}, ${blue})`
  const hexString = `#${toHex(red)}${toHex(green)}${toHex(blue)}`
  return (
    <View style={[styles.container, {backgroundColor:rgbString}]}>
      <Text>{rgbString}</Text>
      <Text>{hexString}</Text>
      <ColorSlider value={red} setValue={setRed} />
      <ColorSlider value={green} setValue={setGreen} />
      <ColorSlider value={blue} setValue={setBlue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  slider:{
    width: '90%'
  }
});
