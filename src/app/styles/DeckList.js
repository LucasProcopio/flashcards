import { color } from './colors'
import { StyleSheet } from 'react-native'

export const deckList = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: color.main,
    flexGrow: 1,
    borderRadius: 4,
    margin: 10,
    padding: 20
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
})
