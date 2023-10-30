import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { atom, useAtom } from "jotai";
import { createPose } from "../api/index.tsx";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface FormProps {
  body: string;
}

const FormResult: React.FC<FormProps> = (props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ border: "none", mt: 5, pt: 2, width: "70%" }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          "font-family": "Geologica",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        TRY THIS ROUTINE
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        sx={{ "font-family": "Poppins", fontSize: "0.8rem" }}
      >
        {props.body}
      </Typography>
    </Container>
  );
};

export default FormResult;
