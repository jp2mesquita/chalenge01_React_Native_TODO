import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home(){
  return(
    <View style={styles.constainer}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  )
}