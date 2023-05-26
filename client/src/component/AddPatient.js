import {useState} from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { addPatient } from '../service/api';
import { useNavigate } from 'react-router-dom';


const Container = styled(FormGroup)`
     width: 50%;
     margin: 5% auto 0 auto
     & > div {
        margin-top: 20px
     }
`
    const defaultValue = {
         patientname:'',
         date:'',
         time:'',
         symptoms:''
         
    }  

const AddPatient = () => {

     const [patient, setPatient] = useState(defaultValue);

     const navigate = useNavigate();

     const onValuechange = (e) => {
      setPatient({...patient, [e.target.name]: e.target.value});
     }

     const addpatientDetails = async () => {
         await addPatient(patient);
         navigate('/all');
     }

    return(
        <Container>
            <Typography variant="h4">Add Patient</Typography>
          <FormControl>
            <InputLabel>Patient Name</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name="patientname"/>
          </FormControl>
          <FormControl>
            <InputLabel>Date</InputLabel>
            <Input type="date" onChange={(e) => onValuechange(e)} name="date"/>
          </FormControl>
          <FormControl>
            <InputLabel>Time</InputLabel>
            <Input type="time" onChange={(e) => onValuechange(e)} name="time"/>
          </FormControl>
          {/* <FormControl>
            <InputLabel>Age</InputLabel>
            <Input type="string" onChange={(e) => onValuechange(e)} name="age"/>
          </FormControl> */}
          <FormControl>
            <InputLabel>Symptoms</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name="symptoms"/>
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={() => addpatientDetails()}>Add Patient</Button>
          </FormControl>
        </Container>
    )
}

export default AddPatient;