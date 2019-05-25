import React from "react";
import { connect } from "react-redux";

import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { TextInput } from "react-native-paper";
import AwesomeAlert from "react-native-awesome-alerts";

import { addCard } from "../styles/addCard";
import { color } from "../styles/colors";

import { handleAddCard } from "../redux/actions";

import { setNotification } from "../utils/api";

class AddCard extends React.Component {
  componentDidMount() {
    setNotification();
  }

  static navigationOptions = {
    title: "Add Question"
  };

  state = {
    question: "",
    answer: "",
    showAlert: false,
    alertTitle: "",
    alertMessage: ""
  };

  /**
   * Add new question (CARD) to the deck then returns to deck screen
   */
  addQuestion = () => {
    const { navigation, dispatch } = this.props;
    const { question, answer } = this.state;
    const deck = navigation.getParam("deck");

    if (question.length >= 3 && answer.length >= 3) {
      card = {
        question: question,
        answer: answer
      };

      dispatch(handleAddCard(deck.id, card));

      const updatedDeck = {
        id: deck.id,
        questions: [...deck.questions, card],
        title: deck.title
      };

      navigation.navigate("Deck", {
        deck: updatedDeck,
        title: deck.title,
        qtCards: Object.keys(updatedDeck.questions).length
      });
    } else {
      this.setState({
        alertTitle: "Sorry",
        alertMessage:
          "The Question field and the Answer must contain at least 3 characters"
      });
      this.showAlert();
    }
  };

  /**
   * Show an alert message
   */
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  /**
   * Hides the alert message
   */
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const { navigation } = this.props;
    const deck = navigation.getParam("deck");
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
            name="answer"
            value={this.state.answer}
            onChangeText={text => this.setState({ answer: text })}
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
            this.hideAlert();
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddCard);
