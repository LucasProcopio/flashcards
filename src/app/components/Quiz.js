import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import CardFlip from "react-native-card-flip";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { quizStyles } from "../styles/quiz";
import { color } from "../styles/colors";

class Quiz extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam("deck");
    return {
      // TODO add card counter here
      title: deck.title
    };
  };

  state = {
    cardCount: 1
  };

  restartQuiz = () => {
    const { navigation } = this.props;
    const deck = navigation.getParam("deck");
    navigation.navigate("Quiz", {
      deck: deck
    });
  };

  render() {
    const { navigation } = this.props;
    const { cardCount } = this.state;
    const deck = navigation.getParam("deck");
    const cardData = Object.values(deck.questions);
    const cardQty = cardData.length;

    console.log(cardData);
    return (
      // todo: show list of cards , with flip and swipe btn
      // todo: set btn check for answers
      // todo: show percentage of how many are correct at the end
      <View style={quizStyles.container}>
        <View style={quizStyles.titleWrapper}>
          <MaterialCommunityIcons
            name="cards-outline"
            size={30}
            color={color.actionColor}
          />
          <Text style={quizStyles.title}>
            Cards {cardCount}/{cardQty}
          </Text>
        </View>
        <View style={quizStyles.titleWrapper}>
          <Text style={quizStyles.infoText}>
            Swipe up the card to show the answere :)
          </Text>
        </View>
        <View>
          <CardStack
            disableTopSwipe={true}
            disableBottomSwipe={true}
            verticalSwipe={false}
            renderNoMoreCards={() => {
              return (
                <View style={quizStyles.scoreWrapper}>
                  <View style={quizStyles.titleWrapper}>
                    <Text style={quizStyles.scoreTitle}>
                      No cards :) Score 100%
                    </Text>
                  </View>
                  <View style={quizStyles.scoreBtnWrapper}>
                    <TouchableOpacity
                      style={quizStyles.answereBtn}
                      onPress={() => this.restartQuiz()}
                    >
                      <Text>Restart quiz</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            onSwiped={() =>
              this.setState({
                cardCount: cardCount < cardQty ? cardCount + 1 : cardCount
              })
            }
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
                    <View style={quizStyles.cardContent}>
                      <TouchableOpacity
                        onPress={() => this["card" + index].flip()}
                      >
                        <Text style={quizStyles.question}>{item.question}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={quizStyles.cardContent}>
                      <TouchableOpacity
                        style={quizStyles.cardContent}
                        onPress={() => this["card" + index].flip()}
                      >
                        <Text style={quizStyles.question}>{item.answer}</Text>
                      </TouchableOpacity>
                    </View>
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
