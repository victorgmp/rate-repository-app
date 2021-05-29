import React from "react";
import Text from "./Text";

const InfoText = ({ color, style, ...props }) => (
  <Text
    color={color}
    fontSize="body"
    fontWeight="normal"
    style={style}
    {...props}
  />
);

export default InfoText;
