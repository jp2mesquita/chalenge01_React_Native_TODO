import { Text, View } from "react-native";
import { styles } from "./styles";

interface ListHeaderProps{
  createdTaksAmount: number
  doneTasksAmount: number
}

export function ListHeader({  createdTaksAmount, doneTasksAmount }: ListHeaderProps){
  return  (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.created}>
          Criadas
        </Text>
        <View style={styles.counter}>
          <Text style={{color: '#d9d9d9'}}>{createdTaksAmount}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.concluded}>
          Concluídas
        </Text>
        <View style={styles.counter}>
        <Text style={{color: '#d9d9d9'}}>{doneTasksAmount}</Text>
        </View>
      </View>
    </View>
  )
}