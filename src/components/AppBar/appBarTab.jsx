import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";

import Subheading from "../Subheading";

// const styles = StyleSheet.create({
//   tab: {
//   },
// });

const AppBarTab = ({ name, link }) => (
  <Link
    to={link}
    component={TouchableWithoutFeedback}
  >
    <Subheading color="textWhite">
      {name}
    </Subheading>
  </Link>
);

export default AppBarTab;
