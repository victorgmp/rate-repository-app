import React from "react";
import { StyleSheet, View } from "react-native";
import ItemCount from "./ItemCount";

const styles = StyleSheet.create({
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    paddingBottom: 10,
  },
});

const Counts = ({ stars, forksCount, reviewCount, ratingAverage }) => (
  <View style={styles.statsContainer}>
    <ItemCount count={stars} title="Stars" />
    <ItemCount count={forksCount} title="Forks" />
    <ItemCount count={reviewCount} title="Reviews" />
    <ItemCount count={ratingAverage} title="Rating" />
  </View>
);

export default Counts;