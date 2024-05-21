const mongoose = require("mongoose")


exports.connectDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("mongoose database is connected");
    } catch (error) {
        console.log(error);
        
    }
}