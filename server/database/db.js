import mongoose from "mongoose";



const Connection = async (username, password) => {
        const URL = `mongodb://${username}:${password}@ac-tptexf5-shard-00-00.pdiysp0.mongodb.net:27017,ac-tptexf5-shard-00-01.pdiysp0.mongodb.net:27017,ac-tptexf5-shard-00-02.pdiysp0.mongodb.net:27017/PATIENT?ssl=true&replicaSet=atlas-sbkht7-shard-0&authSource=admin&retryWrites=true&w=majority`;

        try {
            await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
              console.log('Database connected successfully');
            } catch (error) {
              console.log('Error while Connecting with the database', error);
            }
        }

export default Connection;