import {  View } from "react-native";
import { StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/button";


const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index(){
  return(
    <View style={styles.container}>
      <View style= {styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>

      <View style={styles.footContainer}>
        <Button label={"Choose a photo"} theme="primary"/>
        <Button label={"Use this photo"}/>
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

  footContainer:{
    flex: 1/3,
    alignItems: 'center',
  }
});


