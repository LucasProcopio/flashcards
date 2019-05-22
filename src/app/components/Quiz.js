import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CardFlip from 'react-native-card-flip'
import Swiper from 'react-native-deck-swiper'
import { connect } from 'react-redux'

class Quiz extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam('deck')
    return {
      // TODO add card counter here
      title: deck.title
    }
  }

  render() {
    return (
      // todo: show list of cards , with flip and swipe btn
      // todo: set btn check for answers
      // todo: show percentage of how many are correct at the end
      <View>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default connect()(Quiz)
