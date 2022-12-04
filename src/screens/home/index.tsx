import { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
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
            style={styles.button}
            onPress={handleAddNewTask}
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
      
          {taskList.length > 0 
            ? 
              <>
                {
                  taskList.map(task => {
                    if(!task.isDone){
                      return (
                        <Task
                          key={task.description}
                          task={task}
                          onDelete={handleDeleteTask}
                          onToggle={handleToggleIsDone}
                        />
                      )
                    }
                  })
                }
                {
                  taskList.map(task => {
                    if(task.isDone){
                      return (
                        <Task
                          key={task.description}
                          task={task}
                          onDelete={handleDeleteTask}
                          onToggle={handleToggleIsDone}
                        />
                      )
                    }
                  })
                }
              </>
            : <Empty />
          }

        </View>
      </View>
    </SafeAreaView>
  )
}