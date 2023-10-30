import React, { useState } from "react";
import { TextField, Button, Box, Container } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { atom, useAtom } from 'jotai' 
import { createPose} from '../api/index.tsx'
import { Link } from "react-router-dom";
import FormResult from "./FormResult.tsx";


// const onlineFriends = atom((get) => get(friendsStatus).filter((item) => item.online));
const formAtom = atom({difficulty: "", type: "", benefits: ""})
const responseAtom = atom({body: ""})
const SimpleForm = () => {
  const [formData, setFormData] = useAtom(formAtom);
  const [responseData, setResponseData] = useAtom(responseAtom);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const responseData = await createPose(formData);
      console.log('POST request response:', responseData.status, responseData.statusText);
      console.log(responseData.data.data);
      setResponseData({...responseData, body: responseData.data.data.content})
      
      // Handle the response data as needed
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
    {responseData.body ? <FormResult body={responseData.body}/> :(
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
            options={levels.map((option) => option.label)}
            sx={{ width: 300, my: "0.3em" }}
            onChange={(e,value)=> setFormData({...formData, difficulty: value.toString()})}
            renderInput={(params) => (
            <TextField {...params} label="Difficulty"
            />
            )}
          />
          <Autocomplete
            id="combo-box-demo"
            options={types.map((option) => option.label)}
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

      </Box>)}
    </>
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
    label: "Balancing",
  },
  {
    label: "Forward Bend",
  },
  {
    label: "Lateral Bend",
  },
  {
    label: "Neutral",
  },
  {
    label: "Twist",
  }
];

export default SimpleForm;
