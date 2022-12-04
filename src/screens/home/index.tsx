import { useState } from "react";
import { Alert, Button, FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Task } from "../../components/Task";
import { styles } from "./styles";

export interface TaskListProps{
  description: string
  isDone: boolean,
}

export function Home(){
  const [ taskList, setTaskList ] = useState<TaskListProps[]>([])
  const [newTask, setNewTask] = useState<string>('')

  let count = 0
  taskList.forEach(task => {
    if(task.isDone){
      count++
    }
  });
  const doneTasksAmount = count

  function handleNewTaskInput(text: string){
    setNewTask(text)
  }

  function handleAddNewTask(){
    if(!newTask){
      return
    }
    
    if(taskList.filter(task => task.description === newTask).length >0){
      return(
        Alert.alert('Este item já está em  sua lista de tarefas')
      )
    }
    const taskToAdd = {
      description: newTask,
      isDone: false
    }
    setTaskList(prevState => [...prevState, taskToAdd])
    setNewTask('') 
  }

  function handleDeleteTask(taskToDelete: string){
    const taskListWithouDeleteOne = taskList.filter(task => task.description!=taskToDelete)
    setTaskList(taskListWithouDeleteOne)
  }

  function handleToggleIsDone(taskToToggle: string){
    setTaskList(prevState => prevState.map(task => {
      if(task.description != taskToToggle){
        return( task )
      }else{
        const taskWithCheckToggle = {
          description: taskToToggle,
          isDone: !task.isDone
        }
        return(taskWithCheckToggle)
      }
    }))
  }

  function handleClearAllTasks(){
    Alert.alert("Limpar tudo", "Deseja apagar todas as tarefas?", 
    [
      {
        text: 'Apgar tudo!',
        onPress: () => setTaskList([])
      },
      {
        text: 'Cancelar'
      }
    ],
    {
      cancelable: true
    }
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header />
      
      <View style={styles.main}>
        <View style={styles.inputArea}>
          <TextInput 
            style={styles.textInput}
            placeholder="Adicione  uma nova tarefa"  
            placeholderTextColor={'#808080'}
            onChangeText={(text) => handleNewTaskInput(text)}
            value={newTask}
          />
          
          <TouchableOpacity 
            style={!newTask ? styles.button : styles.disableButon}
            onPress={handleAddNewTask}
            disabled={!newTask ? true : false}
          >
            <Image 
              source={require('../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>

        <ListHeader  
          createdTaksAmount={taskList.length}
          doneTasksAmount={doneTasksAmount}
        />

        <View style={styles.listContainer}>
          {taskList.length > 0 && 
            <TouchableOpacity 
              style={styles.cleanAllTasks}
              onPress={handleClearAllTasks}
            >
              <Text style={styles.cleanTaskText}>Limpar Todas</Text>
            </TouchableOpacity>
          }

          <FlatList
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            data={taskList}
            keyExtractor={item => item.description}
            renderItem={({ item }) => (
              <Task
                  key={item.description}
                  task={item}
                  onDelete={handleDeleteTask}
                  onToggle={handleToggleIsDone}
                />  
            )}
            ListEmptyComponent={() => (
              <Empty />
            )}
          />

        </View>
      </View>
    </SafeAreaView>
  )
}