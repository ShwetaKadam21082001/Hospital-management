import Patient from "../schema/patient-schema.js";


export const addPatient = async (request, response) => {
    const patient = request.body;

    const newPatient = new Patient(patient);

    try {
        await newPatient.save();
        response.status(201).json(newPatient);
    } catch (error) {
        response.status(409).json({ message:error.message});
    }
}

export const getPatients = async (request, response) => {
    try {
      const patients =  await Patient.find({});
      response.status(200).json(patients);
    } catch (error) {
      response.status(404).json({ message: error.message});
    }
}

export const getPatient = async (request, response) => {
  try {
    // const patient =  await Patient.find({ _id: request.params.id});
    const patient = await Patient.findById(request.params.id);
    response.status(200).json(patient);
  } catch (error) {
    response.status(404).json({ message: error.message});
  }
}

export const editPatient = async (request, response) => {
    let patient = request.body;
    const editPatient = new Patient(patient);

    try {
      await Patient.updateOne({ _id: request.params.id }, editPatient);
      response.status(201).json(editPatient);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
}

export const deletePatient = async (request, response) => {
  try {
    await Patient.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: 'User deleted sucessfully'});
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
}