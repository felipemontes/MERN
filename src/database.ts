import mongoose from "mongoose";
import config from './config'

(async () => {
    try {
        const db = mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database is connected to", (await db).connection.name)
    } catch (error) {
        console.error(error)
    }
})();