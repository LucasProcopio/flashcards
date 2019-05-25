import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import CardFlip from "react-native-card-flip";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { clearNotification, setNotification } from "../../utils/api";
import CardStack, { Card } from "react-native-card-stack-swiper";

import Answer from "./Answer";
import Question from "./Question";
import { CardCounter } from "./CardCounter";
import { NoCards } from "./NoCards";
import { Instructions } from "./Instructions";

import { quizStyles } from "../../styles/quiz";
import { color } from "../../styles/colors";

class Quiz extends React.Component {
  componentDidMount() {
    clearNotification().then(setNotification);
  }

  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam("deck");
    return {
      title: deck.title
    };
  };

  state = {
    cardCount: 1,
    score: 0,
    showInstruction: true
  };

  updateScore = cardQty => {
    const currentScore = this.state.score;
    if (currentScore < cardQty) {
      this.setState({ score: currentScore + 1 });
    }
  };

  render() {
    const { navigation } = this.props;
    const { cardCount, score, showInstruction } = this.state;
    const deck = navigation.getParam("deck");
    const cardData = Object.values(deck.questions);
    const cardQty = cardData.length;

    if (cardQty === 0) {
      return (
        <View style={quizStyles.container}>
          <View style={quizStyles.titleWrapper}>
            <MaterialCommunityIcons
              name="emoticon-sad"
              size={50}
              color={color.darkRed}
            />
            <Text style={quizStyles.title}>Sorry this Deck has no cards.</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={quizStyles.container}>
        <CardCounter cardCount={cardCount} cardQty={cardQty} />
        {showInstruction === true ? <Instructions /> : null}
        <View>
          <CardStack
            disableTopSwipe={true}
            disableBottomSwipe={true}
            verticalSwipe={false}
            renderNoMoreCards={() => {
              return (
                <NoCards
                  deck={deck}
                  score={score}
                  cardQty={cardQty}
                  navigation={navigation}
                />
              );
            }}
            onSwiped={() => {
              this.setState({
                showInstruction: showInstruction === true ? false : false,
                cardCount: cardCount < cardQty ? cardCount + 1 : cardCount
              });
            }}
            ref={swiper => {
              this.swiper = swiper;
            }}
          >
            {cardData.map((item, index) => {
              return (
                <Card style={quizStyles.card} key={index}>
                  <CardFlip
                    style={quizStyles.card}
                    ref={card => (this["card" + index] = card)}
                  >
                    <Question
                      item={item}
                      index={index}
                      flip={() => this["card" + index].flip()}
                    />
                    <Answer
                      item={item}
                      index={index}
                      flip={() => this["card" + index].flip()}
                      score={() => this.updateScore(cardQty)}
                    />
                  </CardFlip>
                </Card>
              );
            })}
          </CardStack>
        </View>
      </View>
    );
  }
}

export default connect()(Quiz);
