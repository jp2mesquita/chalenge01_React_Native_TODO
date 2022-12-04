import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 32
  },
  created:{
    color: '#4ea8de',
    fontWeight: '700'
  },
  concluded:{
    color: '#8284fa',
    fontWeight: '700'

  },
  counter: {
    backgroundColor:'#333333',
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    marginLeft: 8,
  }
})