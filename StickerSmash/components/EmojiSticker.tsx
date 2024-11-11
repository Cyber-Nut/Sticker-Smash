import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { type ImageSource } from "expo-image";

type Props= {
    imageSize: number;
    stickerSource: ImageSource;
}

export default function EmojiSticker({imageSize, stickerSource}: Props){

    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
        console.log("double tap detected");
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const drag = Gesture.Pan().onChange((event)=>{
    console.log("drag  detected");
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(()=>{
    return{
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY:translateY.value,
        },
      ],
    };
  });

    return (
      <GestureDetector gesture={drag}>
         <Animated.View style={[{ top: -350 }, containerStyle]}>
          <GestureDetector gesture={doubleTap}>
            <Animated.Image
              source={stickerSource}
              resizeMode="contain"
              style={[imageStyle, { width: imageSize, height: imageSize }]}
            />
          </GestureDetector>
        </Animated.View>
      </GestureDetector>
       
    );
}
