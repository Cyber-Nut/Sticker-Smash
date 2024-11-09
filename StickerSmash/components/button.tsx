import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons";

type props={
    label: String;
    theme?:'primary'; //this question mark means theme is not compulsary to be provided and the primary here means the input can only be primary
    onPress?: ()=>void;
}

export default function Button({label, theme, onPress}:props){
    if(theme ==='primary'){
        return(
            <View
            style={[
                styles.buttonContainer,
                {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}
            ]}>
                <Pressable
                style={[styles.button, {backgroundColor: '#fff'}]}
                onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon}/>
                    <Text style={[styles.buttonlabel, {color: '#25292e'}]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    return(
        <View style={styles.buttonContainer }>
            <Pressable 
            style={styles.button} 
            onPress={()=>{
                alert('You pressed a button.')
            }}>
                <Text style={styles.buttonlabel}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        marginHorizontal: 20,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonlabel:{
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon:{
        paddingRight: 8
    }

});