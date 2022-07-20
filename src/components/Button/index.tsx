import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Button as Buttons } from "@mui/material";
const useStyles = makeStyles((theme: Theme) => ({
  success: {
    background: `${theme.palette.success.main} !important`,
    color: `${theme.palette.secondary.main}`,
    borderRadius: "10px",
    fontSize: "16px !important",
    fontWeight: "bold !important",
    "&:hover": {
      background: `${theme.palette.success.light} !important`,
    },
  },
  back: {
    background: `${theme.palette.secondary.main} !important`,
    color: `${theme.palette.success.main} !important`,
    borderRadius: "10px !important",
    fontSize: "16px !important",
    fontWeight: "bold !important",
    minWidth: "160px !important",
    height: "56px !important",
    border: `1px solid ${theme.palette.success.main} !important`,
    "&:hover": {
      background: `${theme.palette.secondary.light} !important`,
    },
  },
  continue: {
    background: `${theme.palette.success.main} !important`,
    color: `${theme.palette.secondary.main} !important`,
    borderRadius: "10px !important",
    fontSize: "16px !important",
    fontWeight: "bold !important",
    width: "100% !important",
    height: "56px !important",
    border: `1px solid ${theme.palette.secondary.contrastText} !important`,
    "&:hover": {
      background: `${theme.palette.success.light} !important`,
      color: `${theme.palette.secondary.main} !important`,
    },
  },
  checkout: {
    background: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.info.dark} !important`,
    borderRadius: "10px !important",
    width: "100% !important",
    height: "56px !important",
    fontSize: "16px !important",
    fontWeight: "bold !important",
  },
  disable: {
    background: `${theme.palette.info.light} !important`,
    color: `${theme.palette.info.dark} !important`,
    borderRadius: "10px",
    fontSize: "16px !important",
    fontWeight: "bold !important",
  },
}));
interface IButtonProps {
  readonly size?: "medium" | "small" | "large";
  readonly back?: string;
  readonly disabled?: boolean;
  readonly text?: string;
  readonly color?: "back" | "continue" | "checkout";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<IButtonProps> = ({ size, color, text, disabled }) => {
  const classes = useStyles();
  return (
    <Buttons
      className={color ? classes[color] : ""}
      size={size}
      disabled={disabled}
      style={{ textTransform: "capitalize" }}
    >
      {text}
    </Buttons>
  );
};
export default Button;
