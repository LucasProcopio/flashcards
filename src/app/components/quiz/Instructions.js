import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { quizStyles } from "../../styles/quiz";
import { color } from "../../styles/colors";

export const Instructions = () => {
  return (
    <View style={quizStyles.titleWrapper}>
      <Text style={quizStyles.infoText}>
        Click on{" "}
        <MaterialCommunityIcons name="rotate-3d" size={18} color={color.main} />{" "}
        to rotate the card
      </Text>
    </View>
  );
};
