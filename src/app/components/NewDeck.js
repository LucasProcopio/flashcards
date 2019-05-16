import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleNewDeck } from '../redux/actions'
import { AsyncStorage } from 'react-native'

class NewDeck extends React.Component {
  state = {
    deckName: ''
  }
  componentDidMount() {}

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  createDeck = () => {
    const { dispatch } = this.props
    const { deckName } = this.state

    dispatch(handleNewDeck(deckName))
    console.log(`Deck: ${this.state.deckName} Created`)
  }

  showDeck = async () => {
    const value = await AsyncStorage.getItem('React')
    if (value !== null) {
      // We have data!!
      console.log(value)
    } else {
      console.log('Deck do not exists')
    }
  }

  render() {
    return (
      <View>
        <Text>New Deck</Text>
        <TextInput
          onChangeText={text => this.handleChange('deckName', text)}
          name="deckName"
          value={this.state.deckName}
        />
        <TouchableOpacity onPress={() => this.createDeck()}>
          <Text>Create Deck</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.showDeck()}>
          <Text>Show Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(NewDeck)
