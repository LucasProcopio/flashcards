// action creators
import { newDeck, fecthDecks } from './decks'
import { submitNewDeck, setInitialData, fetchDecks } from '../../utils/api'

export function handleInitialData () {
  return dispatch => {
    fetchDecks().then(deckList => {
      if (deckList === null) {
        console.log('FECTHING INITIAL DATA')
        setInitialData().then(decks => {
          const initialData = JSON.parse(decks)
          dispatch(initialData)
        })
      }
    })
  }
}

export function handleNewDeck (deck) {
  return dispatch => {
    return submitNewDeck(deck).then(() => dispatch(newDeck(deck)))
  }
}

export function handleFetchDeck () {
  return dispatch => {
    fetchDecks().then(deckList => {
      if (deckList !== null) {
        const decks = JSON.parse(deckList)
        return dispatch(fecthDecks(decks))
      }
    })
  }
}
