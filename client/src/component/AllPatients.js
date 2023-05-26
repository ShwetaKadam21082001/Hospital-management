import {useEffect, useState} from 'react';

import { Table, TableHead,TableBody, TableRow, TableCell, styled, Button  } from '@mui/material';

import { getPatients, deletePatient } from '../service/api';

import { Link } from 'react-router-dom';

const styledTable = styled(Table)`
    width:90%;
    margin: 50% auto 0 auto;
`
 const THead = styled(TableRow)`
     background: red;
     & > th {
        color:#fff;
        font-size: 20px;
     } 
 `
 const TBody = styled(TableRow)`
    & > td {
        font-size: 20px;
    }
 `

const AllPatients = () => {
    
    const [patients, setPatients] = useState([]);

    
    useEffect(() => {
        getAllPatients();
    }, []);

    const getAllPatients = async() => {
        let response = await getPatients();
        setPatients(response.data);
     }
    
    const deletePatientDetails = async (id) => {
        await deletePatient(id);
        getAllPatients();
    }


    return(
        <styledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>PatientName</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    {/* <TableCell>Age</TableCell> */}
                    <TableCell>Symptoms</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
              <TableBody>
                {
                    patients.map(patient => (
                        <TBody key={patient._id}>
                            <TableCell>{patient._id}</TableCell>
                            <TableCell>{patient.patientname}</TableCell>
                            <TableCell>{patient.date}</TableCell>
                            <TableCell>{patient.time}</TableCell>
                            {/* <TableCell>{patient.age}</TableCell> */}
                            <TableCell>{patient.symptoms}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{ marginRight: 10 }} component={Link} to={`/edit/${patient._id}`}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deletePatientDetails(patient._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
              </TableBody>
        </styledTable>
    )
}

export default AllPatients;



