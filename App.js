import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/app/redux/reducers'
import logger from 'redux-logger'
import log from './src/app/redux/middleware/log'
import thunk from 'redux-thunk'

import NewDeck from './src/app/components/NewDeck'
import DeckList from './src/app/components/DeckList'
import Deck from './src/app/components/Deck'

import { color } from './src/app/styles/colors'

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
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
