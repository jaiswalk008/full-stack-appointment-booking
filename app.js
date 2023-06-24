
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
const userRoutes = require('./routes/userRoutes');

app.use(userRoutes);

sequelize.sync()
.then(()=> app.listen(3000))
.catch((err)=> console.log(err));
