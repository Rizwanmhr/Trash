import React from "react";
import { Grid, Theme, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    "& fieldset": {
      borderRadius: "10px",
    },
    "& label.Mui-focused": {
      color: theme.palette.success.main,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset ": {
        borderColor: theme.palette.success.main,
      },
    },
  },
}));

interface ITextFieldProps {
  readonly placeholder?: string;
  readonly label?: string;
  readonly value?: string;
  readonly InputProps?: object;
  readonly onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const InputField: React.FC<ITextFieldProps> = ({
  placeholder,
  label,
  InputProps,
  onChange,
  value,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            label={label}
            InputProps={InputProps}
            fullWidth
            className={classes.textField}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default InputField;
