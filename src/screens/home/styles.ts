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

  listContainer:{
    marginTop: 20,
    paddingVertical: 48,
    
    borderTopWidth: 2,
    borderRadius: 12,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  }
})