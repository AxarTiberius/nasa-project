const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

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