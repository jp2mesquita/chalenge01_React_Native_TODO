import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

interface TaskProps{
  task: {
    description: string
    isDone: boolean
  }
  onDelete: (taskToDelete: string) => void
  onToggle: (taskToToggle: string) => void
}

export function Task({task, onDelete, onToggle}: TaskProps){
  

  function handleCheckTask(){
    onToggle(task.description)

  }

  function handleDeleteTask(task: string){
    Alert.alert('Deletetar', `Tem certeza que deseja deletar a tarefa?`,[
      {
        text: 'Sim!',
        onPress: () => onDelete(task),
      },
      {
        text: 'Cancelar!',
        style: "cancel"
      }
    ]
    )
    
  }
  return(
    <View style={styles.container}>

      <BouncyCheckbox 
        size={25}
        fillColor='#5E60CE'
        unfillColor="transparent"
        iconStyle={{ borderColor: "red" }}
        onPress={() => handleCheckTask()}
        isChecked={task.isDone}
        innerIconStyle={{ borderWidth: 2, borderColor: task.isDone ? '#5E60CE' : '#4EA8DE' }}
      />

      <Text 
        style={{
          color: task.isDone ? '#808080' : '#f2f2f2', 
          flex: 1,
          textDecorationLine: task.isDone ? 'line-through' : 'none'
        }}
      >
        {task.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDeleteTask(task.description)}
      >
        <Image 
          style={{width: 12.48, height: 14}}
          source={require('../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  )
}