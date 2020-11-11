const express = require("express");
const cors = require("cors");

const app = express();

var corsOption = {
    origin: ['http://localhost:4200','http://localhost:4000'],
}

app.listen(8000, () => {
    console.log("Server is started and listening....");
});


app.use(cors(corsOption));

app.get("/", function(request, response) {
    response.send("Hello Nodejs Server...!!!")
});

require("./articles.js")(app);