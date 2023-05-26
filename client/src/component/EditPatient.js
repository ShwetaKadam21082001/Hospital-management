import {useState, useEffect} from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { editPatient, getPatient } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';


const Container = styled(FormGroup)`
     width: 50%;
     margin: 5% auto 0 auto;
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

const EditPatient = () => {

     const [patient, setPatient] = useState(defaultValue);

     const navigate = useNavigate();
     const { id } = useParams();
     
     useEffect(() => {
         loadPatientDetails();
     }, [])

     const loadPatientDetails = async () => {
        const response = await getPatient(id);
        setPatient(response.data);
     }

     const onValuechange = (e) => {
      setPatient({...patient, [e.target.name]: e.target.value});
     }

     const editpatientDetails = async () => {
         await editPatient(patient, id);
         navigate('/all');
     }

    return(
        <Container>
            <Typography variant="h4">Edit Patient</Typography>
          <FormControl>
            <InputLabel>Patient Name</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name="patientname" value={patient.patientname} />
          </FormControl>
          <FormControl>
            <InputLabel>Date</InputLabel>
            <Input type="date" onChange={(e) => onValuechange(e)} name="date" value={patient.date} />
          </FormControl>
          <FormControl>
            <InputLabel>Time</InputLabel>
            <Input type="time" onChange={(e) => onValuechange(e)} name="time" value={patient.time} />
          </FormControl>
          {/* <FormControl>
            <InputLabel>Age</InputLabel>
            <Input type="string" onChange={(e) => onValuechange(e)} name="age"/>
          </FormControl> */}
          <FormControl>
            <InputLabel>Symptoms</InputLabel>
            <Input onChange={(e) => onValuechange(e)} name="symptoms" value={patient.symptoms}/>
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={() => editpatientDetails()}>Edit Patient</Button>
          </FormControl>
        </Container>
    )
}

export default EditPatient;