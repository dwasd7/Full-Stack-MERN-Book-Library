import {Box, Button,Checkbox,FormControlLabel,FormLabel,TextField,} from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
const BookUpdate = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();



    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(`http://localhost:5000/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchData();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/books/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          tier: Number(inputs.tier),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };

    const onSummit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/books"));
    };

    const onChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
          <form onSubmit={onSummit}>
            <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight="auto" marginTop={10} >
              <FormLabel>Name</FormLabel>
              <TextField value={inputs.name} onChange={onChange} margin="normal" fullWidth variant="outlined" name="name" />
              <FormLabel>Author</FormLabel>
              <TextField value={inputs.author} onChange={onChange} margin="normal" fullWidth variant="outlined" name="author" />
              <FormLabel>Description</FormLabel>
              <TextField value={inputs.description} onChange={onChange} margin="normal" fullWidth variant="outlined" name="description" />
              <FormLabel>tier</FormLabel>
              <TextField value={inputs.tier} onChange={onChange} type="number" margin="normal" fullWidth variant="outlined" name="tier" />
              <FormLabel>Image</FormLabel>
              <TextField value={inputs.image} onChange={onChange} margin="normal" fullWidth variant="outlined" name="image" />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />
              <Button color="warning" variant="contained" type="submit"> Update Book </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };

  
  export default BookUpdate;