import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { createPose } from "../actions/form";


const SimpleForm = () => {
  console.log("SimpleForm");
  
  const [formData, setFormData] = useState({
    difficulty: "",
    type: "",
    benefits: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(createPose(formData));
    
  };

  return (
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="300px"
        mt="100px"
        mx="auto"
      >
        <form noValidate onSubmit={handleSubmit}>
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
            onChange={(e,value)=> setFormData({...formData, difficulty: value.toString()})}
            renderInput={(params) => (
            <TextField {...params} label="Difficulty"
            />
            )}
          />
          <Autocomplete
            id="combo-box-demo"
            options={types}
            sx={{ width: 300, my: "0.3em" }}
            onChange={(e,value)=> setFormData({...formData, type: value.toString()})}
            renderInput={(params) => <TextField {...params} label="Type"/>}
          />
          <Autocomplete
            sx={{ my: "0.3em" }}
            id="free-solo-demo"
            freeSolo
            multiple={true}
            options={benefits.map((option) => option.label)}
            onChange={(e,value)=> setFormData({...formData, benefits: value.toString()})}
            renderInput={(params) => (
              <TextField {...params} label="What are you looking for?"/>
            )}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
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
  },
];

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
