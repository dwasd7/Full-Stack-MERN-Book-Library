const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors =require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router)



mongoose.connect("mongodb+srv://admin:justinisop123@cluster0.9limpvk.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("database connected"))
app.listen(5000);

