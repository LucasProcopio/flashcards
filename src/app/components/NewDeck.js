import React from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import { handleNewDeck } from '../redux/actions'
import { newDeckStyles } from '../styles/newDeck'
import { color } from '../styles/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AwesomeAlert from 'react-native-awesome-alerts'

class NewDeck extends React.Component {
  static navigationOptions = {
    title: 'New Deck'
  }

  state = {
    deckName: '',
    showAlert: false,
    alertTitle: '',
    alertMessage: ''
  }
  componentDidMount() {}

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  createDeckStructure = deckName => {
    const uId = Math.random()
      .toString(36)
      .substr(2, 10)
    return {
      [uId]: {
        id: uId,
        title: deckName,
        questions: []
      }
    }
  }

  createDeck = () => {
    const { dispatch, navigation } = this.props
    const { deckName } = this.state

    if (deckName.length > 3) {
      const deck = this.createDeckStructure(deckName)
      const key = Object.keys(deck)

      dispatch(handleNewDeck(deck))

      navigation.navigate('Deck', {
        deck: deck[key],
        title: deck[key].title,
        qtCards: Object.keys(deck[key].questions).length
      })
    } else {
      this.setState({
        alertTitle: 'Sorry',
        alertMessage: 'The name of the deck must be at least 3 characters'
      })
      this.showAlert()
    }
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    })
  }

  hideAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={newDeckStyles.container}
      >
        <MaterialCommunityIcons
          name="cards-outline"
          size={50}
          color={color.actionColor}
        />
        <Text style={newDeckStyles.title}>Create a new Deck</Text>
        <TextInput
          style={newDeckStyles.textInput}
          onChangeText={text => this.handleChange('deckName', text)}
          name="deckName"
          value={this.state.deckName}
        />
        <TouchableOpacity
          style={newDeckStyles.createBtn}
          onPress={() => this.createDeck()}
        >
          <Text style={newDeckStyles.btnText}>Create Deck</Text>
        </TouchableOpacity>

        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title={this.state.alertTitle}
          message={this.state.alertMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor={color.main}
          onConfirmPressed={() => {
            this.hideAlert()
          }}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck)
