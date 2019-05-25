import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { quizStyles } from "../../styles/quiz";
import { color } from "../../styles/colors";

export const CardCounter = props => {
  return (
    <View style={quizStyles.titleWrapper}>
      <MaterialCommunityIcons
        name="cards-outline"
        size={30}
        color={color.actionColor}
      />
      <Text style={quizStyles.title}>
        Cards {props.cardCount}/{props.cardQty}
      </Text>
    </View>
  );
};
