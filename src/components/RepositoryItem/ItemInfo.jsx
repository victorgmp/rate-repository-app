import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import InfoText from "../InfoText";
import Subheading from "../Subheading";

const styles = StyleSheet.create({
  descriptionContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexShrink: 1,
    paddingLeft: 20,
  },
  subheading: {
    lineHeight: 26,
  },
  description: {
    lineHeight: 26,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 7,
    borderRadius: 7,
    marginTop: 5,
  },
});

const ItemInfo = ({ fullName, description, language }) => (
  <View style={styles.descriptionContainer}>
    <Subheading style={styles.subheading} color="textPrimary">
      {fullName}
    </Subheading>
    <InfoText
      style={styles.description}
      color="textSecondary"
    >
      {description}
    </InfoText>

    <View style={styles.language}>
      <InfoText color="textWhite">
        {language}
      </InfoText>
    </View>
  </View>
);

export default ItemInfo;
