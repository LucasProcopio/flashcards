export const DECK_STORAGE_KEY = 'flashcards:decks'
export const initialData = {
  JavaScript: {
    id: 1,
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Redux: {
    id: 2,
    title: 'Redux',
    questions: [
      {
        question: 'What is Redux?',
        answer: 'A predictable state container for JS apps.'
      }
    ]
  }
}
