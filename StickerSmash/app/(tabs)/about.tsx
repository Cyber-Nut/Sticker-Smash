import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function AboutScreen(){
    return(
        <View style= {styles.container}>
            <Text style = {styles.text}>
                About Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e'
    },

    text: {
        color: '#fff',
    },
});