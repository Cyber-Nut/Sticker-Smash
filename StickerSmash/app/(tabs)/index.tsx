import {  View } from "react-native";
import { StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/button";
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from "react";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton"
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import { type ImageSource } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import EmojiSticker from "@/components/EmojiSticker";
import { captureRef, captureScreen } from "react-native-view-shot";
import { Platform } from "react-native";
import domtoimage from 'dom-to-image';


const PlaceholderImage = require('../../assets/images/background-image.png');


export default function Index(){

  const imageRef = useRef<View>(null);

  const[selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const[showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const[isModalVisible, setModalVisible] = useState<boolean>(false);
  const[pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const[status, requestPermission] = MediaLibrary.usePermissions();

  if(status ===null){
    requestPermission();
  }

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, //this will allow the user to crop the image
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);//this will store the uri of the selected image under the selectedImage varialble
      setShowAppOptions(true); // after the user select an image, the extra buttons will be visible
    } else{
      alert('You did not select any image.');
    }
  }

  const onReset =()=>{
    setShowAppOptions(false);
  }

  const onAddSticker = ()=>{
    setModalVisible(true);
  }

  const onSaveImageAsync = async ()=>{

    if(Platform.OS !== 'web'){
      try{
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
  
        await MediaLibrary.saveToLibraryAsync(localUri);
        if(localUri){
          alert('Saved!');
        }
      } catch(e){
        console.log(e);
      }
    } else{
      try{
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch(e){
        console.log(e);
      }
    }
   
  }

  const onModalClose = ()=>{
    setModalVisible(false);
  }

  return(

    //This is a JavaScript logical AND (&&) operator. In this context, it's checking if pickedEmoji has a truthy value (i.e., it's not null, undefined, or false). If pickedEmoji is truthy, the component that follows (<EmojiSticker />) will be rendered. If pickedEmoji is falsy, nothing will be rendered for this part of the code.(line 60)
    <GestureHandlerRootView style={styles.container}>
      <View style= {styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>} 
        </View>
      </View>

      {
        showAppOptions? // condition to check if the user has selected an image or not
        ( <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>)
        :
        (<View style={styles.footContainer}>
          <Button label={"Choose a photo"} theme="primary" onPress={pickImageAsync}/>
          <Button label={"Use this photo"}/>
        </View>)
      }
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
       <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
    </GestureHandlerRootView>
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
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});


