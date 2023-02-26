import express from 'express';
const app = express();
const port = process.env.PORT ||4000;
import cors from "cors"



app.use(cors())


app.get('/', (req, res) => {
	res.send('Hello Node server!');
});


app.get('/contact', (req, res) => {
    res.send({
    cityName:"karachi"
    });
});



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
