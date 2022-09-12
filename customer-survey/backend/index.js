const express = require('express')
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
const MONGODB_URI = 'mongodb+srv://mohdjuned55:iBrEOzP3YfIwvj4C@cluster0.4tqrt.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(MONGODB_URI)
// const categoryRoutes = require('./routes/category');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
  
client.connect(err => app.listen(4000))
  // console.log("err", err);

  
  // perform actions on the collection object
  // client.close();

app.use("/questions/:no", (req, res, next) => {
  const no = req?.params?.no
  console.log(typeof no);
  const collection = client.db("survey").collection("questions");
  collection.find({question: no}).toArray((err, result)=> {
    console.log(result);
    res.send({
      status: 200,
      message: "question fetched successfully",
      result: result
    })
  });
})
  
  
  