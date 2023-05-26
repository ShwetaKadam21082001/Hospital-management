import axios from 'axios';

const URL = 'http://localhost:8000';

export const addPatient = async (data) => {
    try {
       return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling add Patient Api', error);
    }
}

export const getPatients = async () => {
    try{
   return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log('Error while calling getPatients API', error);
    }
}

export const getPatient = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling getPatients API', error);
    }
}

export const editPatient = async (patient, id) => {
    try {
        return await axios.post(`${URL}/${id}`, patient);
    } catch (error) {
        console.log('Error while calling editpatient api', error);
    }
}

export const deletePatient = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error While calling deletePatient api', error);
    }
}