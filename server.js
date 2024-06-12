const mongo = require("mongodb");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());

let db;
async function initialization() {
  const url =
    "mongodb+srv://khizarali:khizar24@todos.brcftoa.mongodb.net/todos?retryWrites=true&w=majority";
  const con = await mongo.MongoClient.connect(url);
  db = await con.db("todos");
}

initialization();

app.post("/givingtask", (req, res) => {
  const { task, date, complete } = req.body;
  const data = { task, date, complete };
  const insert = db.collection("list").insertOne(data);
});

app.post("/completedone", (req, res) => {
  const { complete, task } = req.body;
  const comp = db
    .collection("list")
    .updateOne({ task }, { $set: { complete } });
});
app.post("/deletedone", (req, res) => {
  const { date } = req.body;
  const comp = db.collection("list").deleteOne({ date });
});

app.get("/gettingtasks", async (req, res) => {
  const alltask = db.collection("list").find();
  let arr = [];
  let i = 0;
  await alltask.forEach((doc) => {
    arr[i++] = doc;
    console.log(arr);
  });
  await res.status(200).json(arr);
});

app.get("/showpending", async (req, res) => {
  const alltask = db.collection("list").find({ complete: "uncomplete" });
  let arr = [];
  let i = 0;
  await alltask.forEach((doc) => {
    arr[i++] = doc;
    console.log(arr);
  });
  await res.status(200).json(arr);
});

app.get("/showcomplete", async (req, res) => {
  const alltask = db.collection("list").find({ complete: "complete" });
  let arr = [];
  let i = 0;
  await alltask.forEach((doc) => {
    arr[i++] = doc;
    console.log(arr);
  });
  await res.status(200).json(arr);
});

app.get("/", (req, res) => {
  res.json("Hello world !!!");
});

app.listen(3000);
