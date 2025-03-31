const express = require("express");
const cors = require("cors");
const userRoute=require("./routes/user")
const connection=require("./connection")

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api",userRoute)

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







