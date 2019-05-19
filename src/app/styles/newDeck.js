import { StyleSheet } from 'react-native'
import { color } from './colors'

export const newDeckStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.lightGrey,
    paddingTop: 40
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: color.blackGrey,
    backgroundColor: color.white,
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
    backgroundColor: color.white,
    width: 200,
    height: 70,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 8,
    borderRadius: 4,
    borderBottomColor: color.actionColor
  },
  btnText: {
    fontSize: 14,
    color: color.blackGrey
  }
})
