import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/app/redux/reducers'
import logger from 'redux-logger'
import log from './src/app/redux/middleware/log'
import thunk from 'redux-thunk'

import NewDeck from './src/app/components/NewDeck'
import DeckList from './src/app/components/DeckList'

import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="list-alt" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: 'white',
      style: {
        height: 56,
        backgroundColor: 'blue',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1
      }
    }
  }
)

const TabNavigator = createAppContainer(Tab)
const store = createStore(rootReducer, applyMiddleware(thunk, log))

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TabNavigator />
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
