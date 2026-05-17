import mongoose from "mongoose";


export const connectDB= async () =>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`\n MONGO DB CONNECTED - ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}