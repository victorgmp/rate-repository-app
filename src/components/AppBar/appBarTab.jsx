import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import Subheading from "../Subheading";

// const styles = StyleSheet.create({
//   tab: {
//   },
// });

const AppBarTab = ({ name }) => (
  <TouchableWithoutFeedback>
    <Subheading color="textWhite">
      {name}
    </Subheading>
  </TouchableWithoutFeedback>
);

export default AppBarTab;
