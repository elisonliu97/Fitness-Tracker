// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

// PORT
const PORT = process.env.PORT || 3000;

// EXPRESS SERVER CONNECTION
const app = express();

// EXPRESS ENCODING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EXPRESS VIEWPOINTS
app.use(express.static("public"));

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// ROUTES
app.use(routes);

// SERVER LISTENING
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
