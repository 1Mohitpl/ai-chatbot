const express = require("express");
const cors = require("cors");
require("dotenv").config();

const chatRoutes = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use(express.static("public"));

app.listen(process.env.PORT, () => {
  console.log(`🤖 Chatbot running on port ${process.env.PORT}`);
});
