const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));



/*app.use("/", (req, res) => {
    app.sendFile( __dirname + '/index.html');
});

//const app = express(); */



app.listen(5000, () => {
    console.log("App running on port 5000 Dev Don");
});