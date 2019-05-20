import React from 'react'
import { connect } from 'react-redux'

import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'

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

  handleChangeText = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addQuestion = () => {}

  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck')
    return (
      <View>
        <View>
          <Text>{deck.title}</Text>
        </View>
        <View>
          <TextInput
            label="Question"
            name="question"
            value={this.state.questionText}
            onChangeText={text => this.handleChangeText(e)}
          />
        </View>
        <View>
          <TextInput
            label="Answere"
            name="answere"
            value={this.state.answereText}
            onChangeText={text => this.handleChangeText(e)}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => this.addQuestion()}>
            <Text>Add question</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect()(AddCard)
