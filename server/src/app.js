const express = require("express")
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes")
const dotenv = require("dotenv")
dotenv.config();

const app = express();
const port = process.env.PORT || 8000

const options = {
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
};

// middleware
app.use(helmet());
app.use(cors(options));
app.use(express.json());

// mount our api router here
app.use("/api", routes);

try {
  app.listen(port, () => {
    console.log(`the server is running on http://localhost:${port}`);
  });
} catch (err) {
  console.log(err);
}