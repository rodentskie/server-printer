const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});


app.use("/fsqr", require("../routes/fsqr-qr/app"));


module.exports = app;
