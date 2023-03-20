import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../constatnts/Colors/colors";
import { makeStyles } from "@mui/styles";
import { Images } from "../../../constatnts/Images/images";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: `linear-gradient(to right, ${colors.MAIN_BLACK} 90%, transparent)`,
    [theme.breakpoints.up("xs")]: {
      background: `linear-gradient(to right, ${colors.MAIN_BLACK} 5vw, transparent),
              url(${Images.BANNER}) no-repeat right center / cover`,
    },
    [theme.breakpoints.up("sm")]: {
      background: `linear-gradient(to right, ${colors.MAIN_BLACK} 40vw, transparent),
            url(${Images.BANNER}) no-repeat right center / cover`,
    },
    [theme.breakpoints.up("md")]: {
      background: `linear-gradient(to right, ${colors.MAIN_BLACK} 60vw, transparent),
              url(${Images.BANNER}) no-repeat right center / contain`,
    },
    [theme.breakpoints.up("lg")]: {
      background: `linear-gradient(to right, ${colors.MAIN_BLACK} 70vw, transparent),
              url(${Images.BANNER}) no-repeat right center / contain`,
    },
  },
  bannerContent: {
    zIndex: 15,
  },
  bannerContentHover: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  },
}));

const HomeBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <Box className={classes.bannerContentHover} />
      <Box className={classes.bannerContent}>
        <Box
          sx={{
            padding: "15px 5vw",
            zIndex: 15,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ color: "#fff" }}>Al-muharami</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <Typography style={{ color: "#fff" }}>Home</Typography>
            <Typography style={{ color: "#fff" }}>About</Typography>
            <Typography style={{ color: "#fff" }}>Contact</Typography>
          </Box>
        </Box>

        <Box sx={{ padding: "15vh 5vw" }}>
          <Typography
            variant="h3"
            sx={{
              color: colors.MAIN_WHITE,
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "64px",
              lineHeight: "96px",
            }}
          >
            AL - MUHARAMI
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;
