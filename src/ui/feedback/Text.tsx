import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  label: string;
  weight?: number;
}

export const Title: React.FC<Props> = ({ label, weight = 600, ...props }) => {
  return (
    <Text fontWeight={weight} {...props}>
      {label}
    </Text>
  );
};

export const Sub: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Text
      color="secondary.600"
      fontFamily={"system-ui"}
      fontWeight="300"
      flex={1}
      {...props}
    >
      {label}
    </Text>
  );
};

export const Content: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Text fontWeight={400} fontFamily="system-ui" fontSize="15px" {...props}>
      {label}
    </Text>
  );
};
