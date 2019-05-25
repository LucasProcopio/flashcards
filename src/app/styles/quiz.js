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
    flex: 1,
    position: "relative",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: color.lightGrey,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 10
  },
  question: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    color: color.blackGrey,
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 22
  },
  answer: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    color: color.white,
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 20
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
  },
  rotateBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.main,
    borderWidth: 3,
    borderColor: color.white,
    borderRadius: 25,
    margin: 10
  },
  actionBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 225
  }
});
