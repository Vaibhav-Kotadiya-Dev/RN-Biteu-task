import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    height: "100%",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  lastTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
    borderColor: "#808080",
    borderWidth: 1 / 2,
    borderRadius: 20,
    paddingHorizontal:8,
    paddingVertical:5,
  },
  headerTextBuy: {
    fontSize: 17,
    fontWeight: "600",
    color: "#ffffff",
    marginLeft:20,
  },
  headerText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#ffffff",
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
  PopularListView: {
    marginTop: 40,
  },
  PopularListText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  listView: {
    marginTop: 20,
  },
  dataListView: {
    marginTop: 40,
    flex: 1,
    paddingBottom: 100,
  },
  dataListViewAndroid: {
    marginTop: 40,
    flex: 1,
    paddingBottom: 10,
  },
  cryptoDetailsView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  coin: {
    height: 32,
    width: 32,
  },
  dataListName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  dataListFullname: {
    color: "#808080",
    fontSize: 15,
    fontWeight: "500",
  },
  dataListHeaderName: {
    color: "#808080",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
