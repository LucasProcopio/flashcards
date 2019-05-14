import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class NewDeck extends React.Component {
  state = {
    deckName: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createDeck = () => {
    console.log(`Deck: ${this.state.deckName} Created`)
  }

  render() {
    return (
      <View>
        <Text>New Deck</Text>
        <TextInput
          onChangeText={() => this.handleChange()}
          name="deckName"
          value={this.state.deckName}
        />
        <TouchableOpacity onPress={() => this.createDeck()}>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewDeck
