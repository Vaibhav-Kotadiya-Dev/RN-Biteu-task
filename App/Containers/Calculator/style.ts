import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  calculatorContainer: {
    backgroundColor: "#000000",
    height: "100%",
    paddingHorizontal: 20,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconView: {
    borderColor: "#808080",
    borderWidth: 1 / 2,
    borderRadius: 20,
    padding: 5,
  },
  back: {
    height: 20,
    width: 20,
  },
  headerTextBuy: {
    fontSize: 17,
    fontWeight: "600",
    color: "#ffffff",
    marginLeft: 110,
  },
  calculatorSubContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  firstView: {
    height: "50%",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  firstSubView: {
    flexDirection: "row",
    width: "100%",
  },
  exchangeView: {
    width: "50%",
    justifyContent: "center",
  },
  upDown: {
    resizeMode: "contain",
    height: 20,
    width: 30,
  },
  countyCoinText: {
    color: "#ffffff",
    marginTop: 10,
  },
  countyNameView: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    paddingRight:50
  },
  inputNumView: {
    flexDirection: "row",
    flexWrap:"wrap",
  },
  inputNum: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginRight:5,
  },
  countyNameText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  numberText: {
    color: "#ffffff",
  },
  numberMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50%",
    paddingHorizontal: 40,
  },
  numberSubView: {
    gap: 45,
  },
  number: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "500",
    padding: 5,
  },
  cross: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  numberDot: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "500",
    marginTop: -12,
    marginLeft: 6,
  },
});

export default styles;
