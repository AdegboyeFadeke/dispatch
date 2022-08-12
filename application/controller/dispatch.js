const dispatchService = require('../services/dispatchservice');

const { WEIGHTLIMIT} = require('../config');

// register a drone
exports.addDrone = async (req, res) =>{
    // first create a request and response service
try{
    const {
        serialNumber, weightLimit, batteryCapacity
    } = req.body;
    console.log(req.body);
    // create the body
    const droneObj = {};
    droneObj.serialNumber = serialNumber;
    droneObj.model = WEIGHTLIMIT;
    droneObj.weightLimit = weightLimit ;
    droneObj.batteryCapacity = batteryCapacity;
    droneObj.state = "IDLE";
    // send to the service
    const result = await dispatchService.addDrone(droneObj);
    // receive the response
    console.log(result);
    return res.json(result.data)
    // catch your error
}catch (err){
    new Error ('The drone can not be made')
}
}