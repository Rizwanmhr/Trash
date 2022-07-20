import React, { useState } from "react";
import Junk from "../../Assets/junkSvg/Junk";
import CardBoard from "../../Assets/cardBoard/CardBoard";
import Dumpster from "../../Assets/dumpster/Dumpster";
import InputField from "../input-field/InputField";
import CancelSharpIcon from "@mui/icons-material/Cancel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { data } from "../Data";
import {
  Stack,
  Grid,
  Box,
  ListItemButton,
  Typography,
  Theme,
  Card,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "../Button";

const useStyles = makeStyles((theme: Theme) => ({
  junk: {
    maxWidth: "100%",
    minHeight: "72px",
    cursor: "pointer",
    border: `1px solid ${theme.palette.success.main}`,
    borderRadius: "10px",
    "&:hover": {
      background: theme.palette.success.contrastText,
    },
  },
  Junktext: {
    color: theme.palette.success.main,
    fontSize: "16px",
  },
  price: {
    fontSize: "16px",
    fontWWeight: "bold",

    color: theme.palette.success.main,
  },
  nonActive: {
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: "10px",
    cursor: "pointer",
    opacity: "0.5",
  },
  pehra: {
    paddingLeft: "1rem",
    cursor: "pointer",
  },
}));

interface IButtonProps {
  onButtonClick: any;
  active: string;
}

const Services: React.FC<IButtonProps> = ({ onButtonClick, active }) => {
  const [filteredData, setFilteredData] = useState<any>([]);
  const [wordEntered, setWordEnter] = useState("");
  const classes = useStyles();
  const handleFilter = (e: any) => {
    const searchword = e.target.value;
    setWordEnter(searchword);
    const newFilter = data.filter((value) => {
      return value.city.includes(searchword);
    });
    setFilteredData(newFilter);
    if (searchword === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEnter("");
  };
  console.log(filteredData, "this is");
  return (
    <>
      <Card sx={{ marginTop: "25px" }}>
        <CardContent>
          <Box px={3}>
            <Stack mt={3}>
              <Typography fontSize="19px" fontWeight="500">
                Choose a service
              </Typography>
              <Typography mt={2} fontSize="16px" sx={{ opacity: "0.6" }}>
                What do you need?
              </Typography>
            </Stack>

            <Grid container spacing={2}>
              <Grid item lg={4} xs={12}>
                <Box
                  className={
                    active === "btn1" ? classes.junk : classes.nonActive
                  }
                  px={2}
                  mt={3}
                  onClick={() => onButtonClick("btn1")}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Junk />
                      </Box>
                      <Typography className={classes.Junktext}>
                        Junk Removal
                      </Typography>
                    </Stack>
                    <Typography className={classes.price}>$80.00</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Box
                  className={
                    active === "btn2" ? classes.junk : classes.nonActive
                  }
                  px={2}
                  mt={3}
                  onClick={() => onButtonClick("btn2")}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box sx={{ cursor: "pointer" }}>
                        <CardBoard />
                      </Box>
                      <Typography className={classes.Junktext}>
                        <Stack alignItems="center">
                          <Typography>Cardboard</Typography>
                          <Typography pr={1}>Removal</Typography>
                        </Stack>
                      </Typography>
                    </Stack>
                    <Typography className={classes.price}>$70.00</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Box
                  className={
                    active === "btn3" ? classes.junk : classes.nonActive
                  }
                  px={2}
                  mt={3}
                  onClick={() => onButtonClick("btn3")}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Dumpster />
                      </Box>
                      <Typography className={classes.Junktext}>
                        <Stack alignItems="center">
                          <Typography>Dumpster</Typography>
                          <Typography pr={2.5}>Rental</Typography>
                        </Stack>
                      </Typography>
                    </Stack>
                    <Typography className={classes.price}>$190.00</Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Stack>
                <Typography fontSize="16px" sx={{ opacity: "0.6" }}>
                  Check if we server in your area
                </Typography>
                <Box mt={2}>
                  <Grid container>
                    <Grid item lg={3.8} xs={12}>
                      <InputField
                        placeholder="Search Places ..."
                        label="Enter your ZIP code"
                        onChange={handleFilter}
                        value={wordEntered}
                        InputProps={{
                          endAdornment: filteredData.length !== 0 && (
                            <CancelSharpIcon
                              id="clearBtn"
                              onClick={clearInput}
                              sx={{
                                cursor: "pointer",
                                color: "#808080 !important",
                              }}
                            />
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                {filteredData.length !== 0 && (
                  // <Box className={classes.dataResult}>
                  <Card style={{ width: "31%" }}>
                    <Stack direction="column">
                      {filteredData.map((data: any) => {
                        return (
                          <ListItemButton>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <LocationOnIcon
                                sx={{
                                  color: "#808080",
                                }}
                              />
                              <Stack direction="column">
                                <Typography>{data.city}</Typography>
                              </Stack>
                            </Stack>
                          </ListItemButton>
                        );
                      })}
                    </Stack>
                  </Card>
                  // </Box>
                )}
              </Stack>
              <Grid container justifyContent="flex-end">
                <Grid item lg={3.3} xs={12}>
                  <Box mt={4} pb={3}>
                    <Button text="continue" color="continue" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Services;
