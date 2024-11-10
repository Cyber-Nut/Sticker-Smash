import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    onPress: ()=>void;  //onPress will take a function as input and return void
}

export default function CircleButton({onPress}:Props){
    return(
        <View style={styles.circleButtonContainer}>
            <Pressable style = {styles.circleButtton}>
                <MaterialIcons name="add" size={38} color={"#25292e"}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
    },

    circleButtton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    }
}
);