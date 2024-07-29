const express = require("express");
const rootRouter = require("./routes/index")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const port = 3000;

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api/v1", rootRouter);


app.listen(port, ()=>{
      console.log(`Server is running on port ${port}`);
})

