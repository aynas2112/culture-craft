import React from "react";
import { TextField, Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here
    // For now, we'll just log the form values
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="300px"
        mt="100px"
        mx="auto"
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          margin="normal"
          required
        />
        <Autocomplete
          id="combo-box-demo"
          options={levels}
          sx={{ width: 300, my: "0.3em" }}
          renderInput={(params) => <TextField {...params} label="Difficulty" />}
        />
        <Autocomplete
          id="combo-box-demo"
          options={types}
          sx={{ width: 300, my: "0.3em" }}
          renderInput={(params) => <TextField {...params} label="Type" />}
        />
        <Autocomplete sx={{my: "0.3em" }}
          id="free-solo-demo"
          freeSolo
          options={benefits.map((option) => option.label)}
          renderInput={(params) => <TextField {...params} label="What are you looking for?" />}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

const benefits = [
  {
    label: "Flexibility",
  },
  {
    label: "Strength",
  },
  {
    label: "Balance",
  },
  {
    label: "Stress Relief",
  },
  {
    label: "Weight Loss",
  },
  {
    label: "Meditation",
  }
]

const levels = [
  {
    label: "Beginner",
  },
  {
    label: "Intermediate",
  },
  {
    label: "Advanced",
  },
];

const types = [
  {
    label: "Hatha",
  },
  {
    label: "Vinyasa",
  },
  {
    label: "Ashtanga",
  },
  {
    label: "Yin",
  },
  {
    label: "Restorative",
  },
  {
    label: "Iyengar",
  },
];

export default SimpleForm;
