import { StyleSheet } from "react-native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === 'android'
const height = isAndroid ? StatusBar.currentHeight : 0

export const styles = StyleSheet.create({
  container:{
    paddingTop: height,
    flex: 1,
    backgroundColor: '#0d0d0d',
    
  },

  main:{
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24
  },

  inputArea:{
    height: 54,
    marginTop: -27,
    flexDirection: 'row',
  },

  textInput:{
    flex: 1,
    backgroundColor: "#262626",
    borderColor: '#0d0d0d',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    color: '#f2f2f2',
  },

  button:{
    height: 54,
    width: 52,
    backgroundColor: '#1e6f9f',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 18,
    marginLeft: 8,
  },

  disableButon:{
    height: 54,
    width: 52,
    backgroundColor: '#4ea8de',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 18,
    marginLeft: 8,
  },

  listContainer:{
    marginTop: 16,
    alignItems: 'center',
    flex: 1,
    paddingBottom: 12
  },

  cleanAllTasks:{
    alignSelf: "flex-end",
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 2,
    marginBottom: 6
  },
  cleanTaskText:{
    color: '#8284fa'
  }
})