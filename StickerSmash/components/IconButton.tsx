import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    icon : keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: ()=>void;
}

export default function CircleButton({icon, label, onPress}:Props){
    return(
        <Pressable style={styles.iconButton}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButtonLabel: {
      color: '#fff',
      marginTop: 12,
    },
  });