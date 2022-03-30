const app=require('./ express');
const express=express();
const port=3000;
app.get('/', function (req, res) {
    res.send('Hello World!')
  })