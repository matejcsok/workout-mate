const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { User, logIn } = require('./DbSchemas/user');

// setup mongo db connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/workout_mate')
    .then(() => console.log('MongoDB connection is up on port: 27017'))
    .catch(err => console.log('MongoDB connection is down', err));

const app = express();

app.use(express.static('dist'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse application/json
app.use(bodyParser.json());

app.post('/api/userLogin', (req, res) => {
    logIn({email: req.body.email, password: req.body.password}, (err, result) => {
        if (err) console.log('app post error', err)
        res.status(200).send(result);
    });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
