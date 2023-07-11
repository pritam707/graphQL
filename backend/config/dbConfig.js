import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const { MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env

const mongUrl = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


const connectDb = () => {
    try {
        mongoose.connect(mongUrl, { useNewUrlParser: true });
        console.log("DB connected")
    }
    catch (error) {
        console.log("DB ERROR ============>>>>" + error);
    }
}

module.exports = {
    connectDb
};
