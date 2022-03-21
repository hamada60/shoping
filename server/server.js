const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const router = require('./routes/routes.js');
const orderRouter = require('./routes/orderRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.use('/', orderRouter);

const connectionString = 'mongodb://localhost:27017/shopnig-cart';

mongoose.connect(connectionString, {useNewUrlParser: true})
.then((res) => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB...", err));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening ${PORT}....`));