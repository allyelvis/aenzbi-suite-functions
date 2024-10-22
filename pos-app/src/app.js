const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

// Routes
const routes = require('./routes/routes');
app.use('/api', routes);

// Database connection
mongoose.connect('mongodb://localhost:27017/pos-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('pos-app database connected!'))
    .catch(err => console.log(err));

// Start server
app.listen(3000, () => console.log('pos-app running on port 3000'));
