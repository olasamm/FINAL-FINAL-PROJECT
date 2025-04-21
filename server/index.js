const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const URI = process.env.uri

port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const User = require("./model/userModel");

mongoose.connect(URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});





app.post('/submit', async(req, res) => {
    try {
        const {name, mail, password} = req.body;
        const newUser = new User({name, mail, password});
        await newUser.save();
        res.status(200).json({ message: 'Data received successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error saving data' });
    }
});
app.post('/signin', async(req, res) => {
    try {
        const {mail, password} = req.body;
        const user = await User.findOne({mail, password}); // Removed 'new' keyword
        if (user) {
            res.status(200).json({ 
                message: 'Login successfully',});
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error during login' });
        
    }
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

    
})
