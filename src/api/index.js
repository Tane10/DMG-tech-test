import express from "express";
import cors from "cors";
import router from "./routes/routes"

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;

const options = {
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"
};

var router = express.Router();

// middleware
app.use(express.static('client'));
app.use(cors());
app.use(express.json());
app.set("port", PORT);
app.use(router)
app.options("*", cors(options)); //enable pre-flight

try {
    app.listen(app.get("port"), () => {
        console.log("the server is running on port",
            app.get("port")
        );
    });

} catch (error) {
    console.log(error);
}
