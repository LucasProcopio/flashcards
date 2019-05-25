import { StyleSheet } from "react-native";
import { color } from "./colors";

export const scoreStyles = StyleSheet.create({
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
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  },
  button: {
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
