import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { scoreStyles } from "../../styles/score";
import { color } from "../../styles/colors";
import { StackActions } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Score extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Score"
    };
  };

  restartQuiz = () => {
    const { navigation } = this.props;
    const deck = navigation.getParam("deck");
    const pushAction = StackActions.push({
      routeName: "Quiz",
      params: {
        deck: deck
      }
    });
    navigation.dispatch(pushAction);
  };

  backToDeck = () => {
    const { navigation } = this.props;
    const deck = navigation.getParam("deck");
    navigation.navigate("Deck", {
      deck: deck,
      title: deck.title,
      qtCards: Object.values(deck.questions).length
    });
  };

  renderEmoji = (cardQty, score) => {
    if (score === 0) {
      return (
        <MaterialCommunityIcons
          name="emoticon-sad"
          size={30}
          color={color.darkRed}
        />
      );
    }
    const emojiHappiness = cardQty / score;
    if (emojiHappiness == 1) {
      return (
        <MaterialCommunityIcons
          name="emoticon-happy"
          size={40}
          color={color.ligthGreen}
        />
      );
    } else if (emojiHappiness >= 2 && emojiHappiness <= cardQty) {
      return (
        <MaterialCommunityIcons
          name="emoticon-neutral"
          size={40}
          color={color.lightBrown}
        />
      );
    } else {
      return (
        <MaterialCommunityIcons
          name="emoticon-sad"
          size={40}
          color={color.darkRed}
        />
      );
    }
  };

  render() {
    const { navigation } = this.props;
    const score = navigation.getParam("score");
    const cardQty = navigation.getParam("cardQty");
    return (
      <View style={scoreStyles.container}>
        <View style={scoreStyles.titleWrapper}>
          {this.renderEmoji(cardQty, score)}
          <Text style={scoreStyles.title}>
            Score: {score}/{cardQty}
          </Text>
        </View>
        <View style={scoreStyles.btnWrapper}>
          <TouchableOpacity
            style={scoreStyles.button}
            onPress={() => this.restartQuiz()}
          >
            <Text>Retart quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={scoreStyles.button}
            onPress={() => this.backToDeck()}
          >
            <Text>I am done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Score;
