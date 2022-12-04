import { Image, Text, View } from "react-native";
import { styles } from "./styles";



export function Header(){
  return(
    <View style={styles.container}>
      <Image 
        style={{width: 110, height: 32}}
        source={require('../../assets/logo.png')}
      />
    </View>
  )
}