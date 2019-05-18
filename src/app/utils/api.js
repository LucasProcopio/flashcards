import { DECK_STORAGE_KEY, initialData } from './_initalData'
import { AsyncStorage } from 'react-native'

export async function submitNewDeck (deck) {
  try {
    return await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
  } catch (e) {
    console.log('MERGE DATA ERROR', e)
  }
}

export async function setInitialData () {
  try {
    await AsyncStorage.setItem(
      DECK_STORAGE_KEY,
      JSON.stringify(initialData)
    ).then(data => data)
  } catch (e) {
    console.log('INITIAL DATA ERROR', e)
  }
}

export async function fetchDecks () {
  try {
    return await AsyncStorage.getItem(DECK_STORAGE_KEY)
  } catch (e) {
    console.log('GET ITEM STORAGE: ', e)
  }
}
