const http = require("http");
const mongoose = require('mongoose');

const app = require("./src/app");

const { loadPlanetsData } = require('./src/models/planets.model');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
const MONGO_URL = 'mongodb+srv://mcjovial:17Mpu8c6IxHkQZXe@nasacluster.ut85m.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});
mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        useUnifiedTopology: true,
    })
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();
