import { useState } from "react";
import { Alert, FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
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
          <FlatList
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            data={taskList}
            keyExtractor={item => item.description}
            renderItem={({ item }) => (
              !item.isDone 
                ? <Task
                    key={item.description}
                    task={item}
                    onDelete={handleDeleteTask}
                    onToggle={handleToggleIsDone}
                  />  
                : null
            )}
            ListEmptyComponent={() => (
              <Empty />
            )}
          />
          <FlatList
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            data={taskList}
            keyExtractor={item => item.description}
            renderItem={({ item }) => (
              item.isDone 
              ?
                <Task
                  key={item.description}
                  task={item}
                  onDelete={handleDeleteTask}
                  onToggle={handleToggleIsDone}
                />
              : null
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}