import React from "react";
import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  label: string;
  scheme?: string;
  onclick?: () => void;
  type?: "button" | "reset" | "submit";
  icon?: any;
}

const Button: React.FC<Props> = ({
  label,
  scheme = "primary",
  icon,
  onclick,
  type = "button",
  ...props
}) => {
  return (
    <ButtonChakra
      leftIcon={icon ? icon : ""}
      onClick={onclick}
      type={type}
      fontSize="md"
      px={6}
      py={6}
      colorScheme={scheme}
      rounded="40px"
      {...props}
    >
      {label}
    </ButtonChakra>
  );
};

export default Button;
