const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://mcjovial:17Mpu8c6IxHkQZXe@nasacluster.ut85m.mongodb.net/nasa?retryWrites=true&w=majority';

async function mongoConnect() {
    await mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connection ready!"))
    .catch((err) => console.log("MongoDB connection error", err));
  
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
};