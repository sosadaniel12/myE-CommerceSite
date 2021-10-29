const e = require("express");
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

require("dotenv").config();

app.use(express.json());

app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
