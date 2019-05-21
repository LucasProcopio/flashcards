import { color } from './colors'
import { StyleSheet } from 'react-native'

export const addCard = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGrey
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  title: {
    color: color.blackGrey,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 20
  },
  addBtnWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  addQuestion: {
    padding: 15,
    width: 180,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    marginTop: 20,
    marginRight: 25,
    marginLeft: 10,
    borderBottomWidth: 8,
    borderRadius: 4,
    color: color.blackGrey,
    fontSize: 16,
    borderBottomColor: color.actionColor
  }
})
