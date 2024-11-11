import { useState } from "react";
import { StyleSheet, FlatList, Platform, Pressable } from "react-native";

import{Image, type ImageSource} from 'expo-image';

type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
      const [emoji] = useState<ImageSource[]>([
      require("../assets/images/emoji1.png"),
      require("../assets/images/emoji2.png"),
      require("../assets/images/emoji3.png"),
      require("../assets/images/emoji4.png"),
      require("../assets/images/emoji5.png"),
      require("../assets/images/emoji6.png"),
      ]);

      return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator = {Platform.OS ==='web'}
            data={emoji}
            contentContainerStyle={styles.listContainer}

            //the renderItem function is going to get the item that the list is iterating over
            renderItem={({item, index}) =>(
                <Pressable   //This will create each emoji pressable, each emoji is an image
                    onPress={()=>{
                        onSelect(item);
                        onCloseModal();
                    }}>
                    <Image source={item} key={index} style={styles.image}/>  
                </Pressable>
            )}
        
        />
      );
}


const styles = StyleSheet.create({
    listContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 20,
    },
  });