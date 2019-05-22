import {
  NEW_DECK,
  FETCH_DECKS,
  SET_INITIAL_DATA,
  ADD_CARD
} from './actionTypes'

export function newDeck (deck) {
  return {
    type: NEW_DECK,
    deck
  }
}

export function fecthDecks (decks) {
  return {
    type: FETCH_DECKS,
    decks
  }
}

export function initialData (decks) {
  return {
    type: SET_INITIAL_DATA,
    decks
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card
  }
}
