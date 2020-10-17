import express, { response } from 'express';

import './database/connection';

const app= express();

app.use(express.json());

// Rote = conjunto 
// Recurse = user  

app.get('/users', (request, response ) => {
    return response.json({ message:'Hello Wolrd'});
});

app.listen(3333);
// fluxo de REQ e RES 
// localhost:3333 