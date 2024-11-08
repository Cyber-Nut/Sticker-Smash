import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

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
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
},
});

const Index = ()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link href = '/tabs/about' style = {styles.button}>Go to About Section</Link>
    </View>
  );
}

export default Index;
