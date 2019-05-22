// action creators
import { newDeck, fecthDecks, initialData, addCard } from './decks'
import { insertData, setInitialData, fetchDecks } from '../../utils/api'

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
    return insertData(deck).then(() => dispatch(newDeck(deck)))
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

export function handleAddCard (deckId, card) {
  return dispatch => {
    // handle add new card to the deck
    fetchDecks().then(deckList => {
      let list = JSON.parse(deckList)
      const deck = {
        ...list,
        [deckId]: {
          ...list[deckId],
          questions: [...list[deckId].questions, card]
        }
      }
      return insertData(deck).then(() => dispatch(addCard(deck)))
    })
  }
}
