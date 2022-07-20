import React, { useState } from "react";
import {
  Stack,
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  Theme,
  Divider,
} from "@mui/material";
import Button from "../Button/index";
import Services from "./Services";
import { makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";

const useStyles = makeStyles((theme: Theme) => ({
  progressBar: {
    height: "18px !important",
    borderRadius: "5px",
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: theme.palette.success.main,
    },
    "&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)": {
      backgroundColor: theme.palette.info.contrastText,
    },
  },
  booking: {
    color: theme.palette.success.main,
  },
  text: {
    color: theme.palette.info.light,
  },
  here: {
    cursor: "pointer",
    color: theme.palette.info.light,
    textDecoration: "underline",
  },
}));

const JunkRemoval = () => {
  const [active, setActive] = useState("btn1");
  const classes = useStyles();

  const onButtonClick = (params: string) => {
    setActive(params);
  };
  let JunkRemoval = 180.0;
  let CardBoardRemoval = 200.0;
  let DumpsterRemoval = 190.0;
  let vehicleSize = 15.0;

  let total =
    active === "btn1"
      ? JunkRemoval + vehicleSize
      : active === "btn2"
      ? CardBoardRemoval + vehicleSize
      : null;
  return (
    <>
      <Box px={6} mt={3}>
        <Grid container spacing={3}>
          <Grid item lg={8} xs={12}>
            <Box>
              <Typography fontSize="22px">Junk Removal</Typography>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize={{ xs: "16px", lg: "46px" }} mt={1}>
                What are you looking for?
              </Typography>
              <Button text="Back" color="back" />
            </Stack>
            <Services onButtonClick={onButtonClick} active={active} />
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box pt={7.6}>
              <Stack spacing={1}>
                <Typography fontSize="16px">Your Progress</Typography>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  className={classes.progressBar}
                />
              </Stack>
            </Box>
            <Card sx={{ marginTop: "25px", background: "#F2F2F2" }}>
              <CardContent>
                <Box px={1}>
                  <Typography fontSize="24px" fontWeight="bold">
                    Price Quote
                  </Typography>
                  <Box mt={2.3}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography>
                        {active === "btn1"
                          ? "Junk Removal"
                          : active === "btn2"
                          ? "CardBoard Removal"
                          : active === "btn3"
                          ? "Dumpster Rental"
                          : ""}
                      </Typography>
                      <Typography fontWeight="bold">
                        {active === "btn1"
                          ? `$${JunkRemoval}`
                          : active === "btn2"
                          ? `$${CardBoardRemoval}`
                          : active === "btn3"
                          ? `$${DumpsterRemoval}`
                          : ""}
                      </Typography>
                    </Stack>
                  </Box>
                  {active === "btn1" || active === "btn2" ? (
                    <Box mt={2} pb={4}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Stack>
                          <Typography>Vehicle Size:Pick-Up</Typography>
                          <Typography>Truck</Typography>
                        </Stack>
                        <Typography fontWeight="bold">{`$${vehicleSize}`}</Typography>
                      </Stack>
                    </Box>
                  ) : (
                    ""
                  )}

                  <Divider />
                  <Typography
                    mt={2}
                    fontWeight="800"
                    fontSize="18px"
                    className={classes.booking}
                  >
                    Booking Details
                  </Typography>
                  <Box mt={7}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography fontSize="24px" fontWeight="800">
                        total
                      </Typography>
                      <Typography fontSize="18px" fontWeight="800">
                        {active === "btn1" || active === "btn2"
                          ? `$${total}`
                          : `$${DumpsterRemoval}`}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box mt={2}>
                    <Button text="Checkouts" color="checkout" disabled />
                  </Box>
                  <Stack>
                    <Typography
                      mt={2}
                      color="grey"
                      fontSize="14px"
                      className={classes.text}
                    >
                      Need help? We are here for you! You can chat with us
                      <Typography>
                        <span className={classes.here}>here</span>.
                      </Typography>
                    </Typography>
                  </Stack>
                  <Typography fontSize="14px" className={classes.text}>
                    Click <span className={classes.here}>here</span> to
                    understand our pricing.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default JunkRemoval;
