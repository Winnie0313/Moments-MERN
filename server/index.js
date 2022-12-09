import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


// set up MongoDB
const CONNECTION_URL = 'mongodb+srv://winnie:wMh3OGIZDUHQ0zc0@cluster0.vp6cc2s.mongodb.net/?retryWrites=true&w=majority'