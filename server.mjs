import express from 'express';
const app = express();
const port = process.env.PORT ||4000;
import cors from "cors"



app.use(cors())


app.get('/', (req, res) => {
    console.log('Hecllo Node server!' + req.ip);
	res.send('Hello Node server!'+req.ip);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
