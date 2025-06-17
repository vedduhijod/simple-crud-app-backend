import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Product from "./models/product.model.js";
import ProductRoute from "./routes/product.route.js";


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// routes
app.use("/api/products", ProductRoute);

app.get("/hi", (req, res) => {
  res.send("Hello World");
})


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });