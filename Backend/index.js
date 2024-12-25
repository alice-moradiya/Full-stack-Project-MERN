import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
 
const app = express()

dotenv.config() 

const PORT = process.env.PORT || 4000
const URI = process.env.MongogDBURI;

// Connect to mongoDB
try{

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
console.log("Connected to MongoDB");

}catch(error){
    console.log("Error: ", error)

}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})