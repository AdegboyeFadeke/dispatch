const Dispatch = require('../models/dispatch.model');

async function createSerialNumber(){
    const crypto = require("crypto");
const  serialNumber = crypto.randomBytes(20).toString('hex');
await serialNumber.save()
}

exports.addDrone = async (droneObj) => {
    try{ 
        console.log(droneObj)
    createSerialNumber();  
    const newDrone = new Dispatch(droneObj);
    console.log(newDrone)
    newDrone.serialNumber = createSerialNumber();
    await newDrone.save()
    const result = {};
    console.log(result)
    result.data = newDrone;
    }catch (err){
        throw new Error('couldnt create new drone')
    }
}
