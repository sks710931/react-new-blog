import React from "react";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";

export const TextBox = ({
  name,
  label,
  placeholder,
  labelColor,
  maxLength,
  decorationColor,
  faIcon,
  materialIcon,
  displayType,
  paddingType,
  spacing,
}) => {
  const useStyles = makeStyles(() => ({
    textBox: {
      display: displayType,
      flexDirection: "column",
      width: "100%",
      position: "relative",
      [paddingType]: spacing,
    },
    label: {
      color: `${labelColor ? labelColor : "white"}`,
      marginRight: 15
    },
    input: {
      lineHeight: "50px",
      outline: "none",
      paddingLeft: 15,
      paddingRight: 30,
      border: "1px solid #d5d5d5",
      height: 50,
      "&:focus": {
        borderBottom: `${
          decorationColor ? "3px solid " + decorationColor : "3px solid #1d86b8"
        }`,
        height: 50,
      },
    },
    icon: {
      position: "absolute",
      right: 10,
      top: 43,
      fontSize: 30,
      color: decorationColor,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.textBox}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes.input}
        autoComplete="off"
        name={name}
        type="text"
        placeholder={placeholder}
        maxLength={`${maxLength ? maxLength : 100}`}
      />
      <Icon className={`${faIcon} ${classes.icon}`}>{materialIcon}</Icon>
    </div>
  );
};
