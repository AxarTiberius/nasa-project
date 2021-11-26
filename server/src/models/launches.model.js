const launches = require('./launches.mongo');
const planets = require('./planets.mongo');

let latestFlightNumber = 100;

const launch ={
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['CND', 'NASA'],
    upcoming: true,
    success: true
};

saveLaunch(launch);

// launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

async function getAllLaunches(){
    return await launches.find({}, {'_id': 0, '__v': 0});
}

async function saveLaunch(launch){
    const planet = await planets.findOne({
        keplerName: launch.target
    });
    if (!planet) {
        throw new Error('No matching planet found');
    }
    await launches.updateOne({
        flightNumber: launch.flightNumber
    }, launch, {upsert: true})
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        launch.flightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['CodeNet Digital', 'NASA'],
            flightNumber: latestFlightNumber,
        })
    );
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted; 
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
};
