import { NEW_DECK, FETCH_DECKS, SET_INITIAL_DATA } from '../actions/actionTypes'

export default function decks (state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_DATA:
      return {
        ...state,
        ...action.decks
      }
    case NEW_DECK:
      return {
        ...state,
        ...action.deck
      }
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks
      }
    default:
      return state
  }
}
