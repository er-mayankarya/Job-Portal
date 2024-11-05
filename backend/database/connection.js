import mongoose  from "mongoose";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URL , {
        dbName : "JOB_PORTAL"
    }).then( ()=>{
        console.log("Connected to Database");
    }).catch(err => {
        console.log(`Some Error occured while connecting to Database : ${err}`);
    })
}