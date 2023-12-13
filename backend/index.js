import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy Cross-Origin Resource Sharing
//Allow all origins with default of cors(*)
app.use(cors());
//Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Caleb Covington')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });