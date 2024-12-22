import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://teid62227:gzfUvzflpoDr02Z4@cluster0.7if3e.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
