import { StyleSheet } from "react-native";
import { color } from "./colors";

export const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGrey
  },
  titleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  title: {
    color: color.blackGrey,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1
  },
  card: {
    padding: 15,
    width: 300,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.white,
    marginRight: 25,
    marginLeft: 25,
    borderBottomWidth: 8,
    borderRadius: 4,
    borderBottomColor: color.actionColor
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center"
  },
  question: {
    color: color.blackGrey,
    fontSize: 14
  },
  scoreWrapper: {
    flex: 1
  },
  scoreTitle: {
    color: color.blackGrey,
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 1
  },
  scoreBtnWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  showAnswerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 20
  },
  infoText: {
    color: color.main,
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 1
  },
  answereBtn: {
    backgroundColor: color.white,
    width: 150,
    height: 70,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 8,
    borderRadius: 4,
    borderBottomColor: color.actionColor
  }
});
