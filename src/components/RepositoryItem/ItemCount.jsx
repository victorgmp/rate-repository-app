import React from "react";
import { StyleSheet, View } from "react-native";
import InfoText from "../InfoText";
import Subheading from "../Subheading";

const styles = StyleSheet.create({
  statsItemContainer: {
    display: "flex",
    alignItems: "center",
  },
  subheading: {
    marginBottom: 5,
  },
});

const ItemCount = ({ count, title }) => (
  <View style={styles.statsItemContainer}>
    <Subheading style={styles.subheading} color="textPrimary">
      {count}
    </Subheading>
    <InfoText color="textSecondary">{title}</InfoText>
  </View>
);

export default ItemCount;