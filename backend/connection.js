const express = require("express")
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connect to mogoDB");
    })
    .catch((err) => {
        console.log("error")
    })