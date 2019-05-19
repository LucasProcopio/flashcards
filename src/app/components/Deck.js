import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ActionButton, { ActionButtonItem } from 'react-native-action-button'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import { connect } from 'react-redux'

import deckStyle from '../styles/deck'
import { color } from '../styles/colors'

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  }

  deleteDeck = () => {}

  addCard = () => {}

  startQuiz = () => {}

  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck')
    const qtCards = navigation.getParam('qtCards')

    return (
      <View style={deckStyle.container}>
        <View style={deckStyle.titleWrapper}>
          <Text style={deckStyle.title}>{deck.title}</Text>
        </View>
        <View style={deckStyle.questionCard}>
          <MaterialCommunityIcons
            name="cards-outline"
            size={50}
            color={color.actionColor}
          />
          <Text style={deckStyle.questionCardContent}>Cards: {qtCards}</Text>
        </View>
        <View style={deckStyle.actionCardWrapper}>
          <TouchableOpacity
            style={deckStyle.startQuizCard}
            onPress={() => this.startQuiz()}
          >
            <MaterialIcons
              name="play-circle-outline"
              size={30}
              color={color.actionColor}
            />
            <Text style={deckStyle.actionText}>Start quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={deckStyle.addCard}
            onPress={() => this.addCard()}
          >
            <MaterialIcons
              name="add-circle-outline"
              size={30}
              color={color.actionColor}
            />
            <Text style={deckStyle.actionText}>Add Card</Text>
          </TouchableOpacity>
        </View>

        <ActionButton buttonColor={color.main}>
          <ActionButton.Item
            buttonColor={color.darkRed}
            title="Delete this deck"
            onPress={() => this.deleteDeck()}
          >
            <MaterialIcons
              name="delete-forever"
              size={30}
              color={color.white}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

export default connect()(Deck)
