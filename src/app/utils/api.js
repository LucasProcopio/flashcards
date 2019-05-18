import { DECK_STORAGE_KEY, initialData } from './_initalData'
import { AsyncStorage } from 'react-native'

export function setNewDeck (deck) {
  return {
    [deck]: {
      title: deck,
      questions: []
    }
  }
}

export function submitNewDeck (deck) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck]: {
        title: deck,
        questions: []
      }
    })
  )
}

export async function setInitialData () {
  try {
    await AsyncStorage.setItem(
      DECK_STORAGE_KEY,
      JSON.stringify(initialData)
    ).then(data => data)
  } catch (e) {
    console.log(e)
  }
}

export async function fetchDecks () {
  try {
    return await AsyncStorage.getItem(DECK_STORAGE_KEY)
  } catch (e) {
    console.log('GET ITEM STORAGE: ', e)
  }
}
