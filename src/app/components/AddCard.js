import React from 'react'
import { connect } from 'react-redux'

import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import { TextInput } from 'react-native-paper'
import { addCard } from '../styles/addCard'

class AddCard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam('deck')
    return {
      title: deck.title
    }
  }

  state = {
    question: '',
    answere: ''
  }

  addQuestion = () => {}

  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck')
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={addCard.container}
      >
        <View style={addCard.titleWrapper}>
          <Text style={addCard.title}>{deck.title}</Text>
        </View>
        <View>
          <TextInput
            style={addCard.textInput}
            label="Question"
            name="question"
            value={this.state.question}
            onChangeText={text => this.setState({ question: text })}
          />
        </View>
        <View>
          <TextInput
            style={addCard.textInput}
            label="Answere"
            name="answere"
            value={this.state.answere}
            onChangeText={text => this.setState({ answere: text })}
          />
        </View>
        <View style={addCard.addBtnWrapper}>
          <TouchableOpacity
            style={addCard.addQuestion}
            onPress={() => this.addQuestion()}
          >
            <Text>Add question</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCard)
