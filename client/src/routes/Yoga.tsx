import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Pose from "./Pose";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#f50057",
    color: "black",
    borderRadius: "50px",
    padding: "14px 40px",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff4081",
    },
    align: "center",
  },
}));

const Yoga = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth="lg"
      sx={{ border: "none", mt: 15, pt: 2, width: "70%" }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          "font-family": "Geologica",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        Experience the Power of Indian Yoga
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ "font-family": "Poppins", fontSize: "1.6rem" }}
      >
        India, the land of diverse cultures and ancient traditions, is home to
        one of the world's most powerful and transformative practices – Yoga.
        Rooted in spirituality and mindfulness, yoga has been cherished and
        practiced for thousands of years, making it an integral part of Indian
        heritage.
      </Typography>

      <Button variant="outlined" className={classes.button} sx={{border: "1px solid black", mt: "1.5em", left: "50%", translate: "-50%" }}>
        <Link to="/routine">Get Started</Link>
      </Button>
    </Container>
  );
};

export default Yoga;
