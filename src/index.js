const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const path = require("path")

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;

const options = {
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"
};

// middleware
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.set("port", PORT);
// app.use(router)
app.options("*", cors(options)); //enable pre-flight


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

try {
    app.listen(app.get("port"), () => {
        console.log("the server is running on port",
            app.get("port")
        );
    });

} catch (error) {
    console.log(error);
}
