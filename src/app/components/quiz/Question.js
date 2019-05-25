import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { quizStyles } from "../../styles/quiz";
import { color } from "../../styles/colors";

class Question extends React.Component {
  render() {
    const { item, flip } = this.props;
    return (
      <View style={quizStyles.cardContent}>
        <Text style={quizStyles.question}>{item.question}</Text>

        <View style={quizStyles.actionBtns}>
          <TouchableOpacity
            style={{
              ...quizStyles.rotateBtn,
              borderColor: color.main,
              backgroundColor: color.white
            }}
            onPress={() => flip()}
          >
            <MaterialCommunityIcons
              name="rotate-3d"
              size={40}
              color={color.main}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Question;
