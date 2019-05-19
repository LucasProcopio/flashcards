import { color } from './colors'
import { StyleSheet } from 'react-native'

const deckStyle = StyleSheet.create({
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
  questionCard: {
    padding: 15,
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    marginRight: 25,
    marginLeft: 25,
    borderBottomWidth: 8,
    borderRadius: 4,
    borderBottomColor: color.actionColor
  },
  questionCardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    color: color.blackGrey,
    fontSize: 18
  },
  actionCardWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  startQuizCard: {
    padding: 15,
    width: 140,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 25,
    borderBottomWidth: 8,
    borderRadius: 4,
    borderBottomColor: color.actionColor
  },
  actionText: {
    color: color.blackGrey,
    fontSize: 16
  },
  addCard: {
    padding: 15,
    width: 140,
    height: 100,
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

export default deckStyle
