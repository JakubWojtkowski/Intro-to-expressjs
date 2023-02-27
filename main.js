const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/bmi", (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post("/bmi", (req, res) => {

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = ((weight) / Math.pow(height, 2)).toFixed(2);

    console.log(bmi);
    res.send(`Your BMI equals: ${bmi}`);

});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});