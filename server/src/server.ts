import express from 'express';

const app = express();
app.use(express.json());

app.post('/users', () => {

})

app.listen(3333);