import { NEW_DECK, FETCH_DECKS } from './actionTypes'

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
