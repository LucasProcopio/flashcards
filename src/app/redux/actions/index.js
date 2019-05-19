// action creators
import { newDeck, fecthDecks, initialData } from './decks'
import { submitNewDeck, setInitialData, fetchDecks } from '../../utils/api'

export function handleInitialData () {
  return dispatch => {
    return fetchDecks().then(deckList => {
      if (deckList === null) {
        setInitialData().then(() => {
          fetchDecks().then(decks => {
            const decksObj = JSON.parse(decks)
            dispatch(initialData(decksObj))
          })
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
