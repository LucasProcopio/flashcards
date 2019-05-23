import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/app/redux/reducers'

import log from './src/app/redux/middleware/log'
import thunk from 'redux-thunk'

import NewDeck from './src/app/components/NewDeck'
import DeckList from './src/app/components/DeckList'
import Deck from './src/app/components/Deck'
import AddCard from './src/app/components/AddCard'
import Quiz from './src/app/components/Quiz'

import { color } from './src/app/styles/colors'
import { main } from './src/app/styles/main'

const stackNav = createStackNavigator(
  {
    DeckList: {
      screen: DeckList
    },
    NewDeck: {
      screen: NewDeck
    },
    Deck: {
      screen: Deck
    },
    AddCard: {
      screen: AddCard
    },
    Quiz: {
      screen: Quiz
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: color.main
      },
      headerTintColor: color.white,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const AppContainer = createAppContainer(stackNav)
const store = createStore(rootReducer, applyMiddleware(thunk, log))

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={main.container}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}
