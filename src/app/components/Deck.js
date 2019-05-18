import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  }

  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck')
    return (
      <View>
        <Text>{deck.id}</Text>
      </View>
    )
  }
}

export default connect()(Deck)
