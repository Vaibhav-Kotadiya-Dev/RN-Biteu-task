import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
  },
  modalContentView: {
    borderTopWidth: 1 / 2,
    borderColor: "#808080",
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingHorizontal: 16,
  },
  searchView: {
    flexDirection: "row",
    borderWidth: 1 / 2,
    alignItems: "center",
    marginTop: 35,
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#808080",
  },
  searchViewAndroid: {
    flexDirection: "row",
    borderWidth: 1 / 2,
    alignItems: "center",
    marginTop: 35,
    width: "100%",
    paddingHorizontal: 8,
    // paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#808080",
  },
  searchIconView: {
    width: "8%",
  },
  search: {
    height: 17,
    width: 17,
  },
  searchInput: {
    fontSize: 17,
    color: "#ffffff",
    width: "92%",
  },
  allView: {
    marginTop: 25,
  },
  allText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#808080",
  },
  modalDataDiv: {
    height: "73%",
    marginTop: 25,
    paddingBottom:120,
  },
  imgNameDiv: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  coin: {
    height: 22,
    width: 22,
  },
  countryName: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default styles;
