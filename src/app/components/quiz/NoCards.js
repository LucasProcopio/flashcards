import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { quizStyles } from "../../styles/quiz";

export const NoCards = props => {
  return (
    <View style={quizStyles.scoreWrapper}>
      <View style={quizStyles.titleWrapper}>
        <Text style={quizStyles.scoreTitle}>No more cards</Text>
      </View>
      <View style={quizStyles.scoreBtnWrapper}>
        <TouchableOpacity
          style={quizStyles.answereBtn}
          onPress={() => {
            props.navigation.navigate("Score", {
              deck: props.deck,
              score: props.score,
              cardQty: props.cardQty
            });
          }}
        >
          <Text>View Score</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
