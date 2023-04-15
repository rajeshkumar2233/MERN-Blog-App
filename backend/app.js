import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://rajeshkumar2233:9691501076Rj@cluster0.mrghs.mongodb.net/koota", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000);
    console.log("Connected TO Database 5000");
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });