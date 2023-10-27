const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
server.use(cors());
server.use(bodyParser.json());

const startServer = async () =>{
    await mongoose.connect('')
    server.listen(3000);
}
startServer();