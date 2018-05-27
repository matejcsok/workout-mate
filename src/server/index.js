const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static('dist'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.post('/api/userLogin', (req, res) => {
    let body = req.body;
    console.log(body)
    res.status(200).send()
});

app.listen(8080, () => console.log('Listening on port 8080!'));
