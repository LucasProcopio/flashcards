import { color } from './colors'
import { StyleSheet } from 'react-native'

export const deckList = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.lightGrey
  },
  item: {
    backgroundColor: color.white,
    margin: 10,
    padding: 5,
    width: 300,
    height: 80,
    borderBottomWidth: 4,
    borderRadius: 4,
    borderBottomColor: color.actionColor
  },
  title: {
    fontSize: 16,
    color: color.blackGrey,
    fontWeight: 'bold'
  },
  cardText: {
    fontSize: 12,
    color: color.blackGrey
  }
})
