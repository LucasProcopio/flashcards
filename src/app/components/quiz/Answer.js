import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { quizStyles } from "../../styles/quiz";
import { color } from "../../styles/colors";

class Answer extends React.Component {
  updateScore = score => {
    if (score == 1) {
      this.props.score();
    }
    this.props.flip();
  };

  render() {
    const { item, flip } = this.props;
    return (
      <View
        style={{
          ...quizStyles.cardContent,
          backgroundColor: color.main
        }}
      >
        <Text style={quizStyles.answer}>{item.answer}</Text>

        <View style={quizStyles.actionBtns}>
          <TouchableOpacity
            style={{
              ...quizStyles.rotateBtn,
              borderColor: color.ligthGreen,
              marginTop: 30
            }}
            onPress={() => this.updateScore(1)}
          >
            <FontAwesome name="thumbs-up" size={30} color={color.ligthGreen} />
          </TouchableOpacity>
          <TouchableOpacity style={quizStyles.rotateBtn} onPress={() => flip()}>
            <MaterialCommunityIcons
              name="rotate-3d"
              size={40}
              color={color.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...quizStyles.rotateBtn,
              borderColor: color.ligthRed,
              marginTop: 30
            }}
            onPress={() => this.updateScore()}
          >
            <FontAwesome name="thumbs-down" size={30} color={color.ligthRed} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Answer;
