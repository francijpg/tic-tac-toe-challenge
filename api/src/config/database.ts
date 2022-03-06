import mongoose from "mongoose";
import config from "./secrets";

(async () => {
  try {
    const mongooseOptions = {
      authSource: "admin",
      user: config.MONGO_USER,
      pass: config.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);

    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
})();
