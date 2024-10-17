const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

async function main(){
  try {
    await mongoose.connect("mongodb+srv://yasvanthikak21it:yasvanthika@cluster0.aq0bkxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Mongodb Connected Successfully");
  } catch (err) {
    console.log(err);
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

main();

const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRouted = require("./src/routes/categoryRoute")
app.use("/api", ItemRoutes);
app.use("/api",CategoryRouted );
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
