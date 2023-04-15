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


if (process.env.NODE_ENV==='production'){
  app.use(express.static("client/build"))
}

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://rajeshkumar2233:9691501076Rj@cluster0.mrghs.mongodb.net/kota")
  .then(() => app.listen(process.env.PORT ||8000))


  .then(() => console.log("Connected TO Database 8000"))
  .catch((err) => console.log(err));
