import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment'; 

 const patientSchema = mongoose.Schema({
    patientname: String,
    date: String,
    time: String,
    mobileno: String,
    symptoms: String
})

autoIncrement.initialize(mongoose.connection);
// patientSchema.plugin(autoIncrement.plugin, 'patient');

 const patient =  mongoose.model('patient', patientSchema);

  export default patient;