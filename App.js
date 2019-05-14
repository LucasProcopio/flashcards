import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import NewDeck from './src/app/components/NewDeck'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator(
  {
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
export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
