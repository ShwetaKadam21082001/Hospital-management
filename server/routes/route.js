import express from 'express';
import { addPatient, getPatients, getPatient, editPatient, deletePatient } from '../controller/patient-controller.js';


const router = express.Router();


router.post('/add', addPatient);
router.get('/all', getPatients);
router.get('/:id', getPatient);
router.post('/:id', editPatient);
router.delete('/:id', deletePatient);


export default router;