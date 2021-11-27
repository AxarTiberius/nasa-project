const http = require("http");

const app = require("./src/app");

const { loadLaunchData } = require("./src/models/launches.model");
const { loadPlanetsData } = require('./src/models/planets.model');
const { mongoConnect } = require("./src/services/mongo");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();
