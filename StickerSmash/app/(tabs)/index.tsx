import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";


const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index(){
  return(
    <View style={styles.container}>
      <View style= {styles.imageContainer}>
        <Image source = {PlaceholderImage} style ={styles.image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "#fff",
  },

  imageContainer: {
    flex: 1,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18
  }
});


