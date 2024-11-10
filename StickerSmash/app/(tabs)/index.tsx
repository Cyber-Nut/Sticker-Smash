import {  View } from "react-native";
import { StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";


const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index(){

  const[selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const[showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, //this will allow the user to crop the image
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri); //this will store the uri of the selected image under the selectedImage varialble
      setShowAppOptions(true); // after the user select an image, the extra buttons will be visible
    } else{
      alert('You did not select any image.');
    }
  }

  return(
    <View style={styles.container}>
      <View style= {styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>

      {
        showAppOptions? // condition to check if the user has selected an image or not
        (<View/>)
        :
        (<View style={styles.footContainer}>
          <Button label={"Choose a photo"} theme="primary" onPress={pickImageAsync}/>
          <Button label={"Use this photo"}/>
        </View>)
      }
      
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


