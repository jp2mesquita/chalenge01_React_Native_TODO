import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Empty(){
  return(
    <View style={styles.container}>
      <Image
        source={require('../../assets/clipboard.png')}
      />

      <Text style={{color: '#808080', fontWeight: "bold"}}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={{color: '#808080'}}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}