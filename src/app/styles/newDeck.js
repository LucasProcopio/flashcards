import { StyleSheet } from 'react-native'
import { color } from './colors'

export const newDeckStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: color.blackGrey,
    width: 300,
    height: 40,
    color: color.blackGrey,
    fontSize: 14,
    padding: 8,
    margin: 20
  },
  title: {
    fontSize: 18,
    color: color.blackGrey,
    marginTop: 20
  },
  createBtn: {
    backgroundColor: color.main,
    borderRadius: 3,
    width: 100,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 12,
    color: color.white
  }
})
