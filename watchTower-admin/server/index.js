import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

/* Configuration */
dotenv.config()
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy( { policy : "cross-origin"})); // this allowed cross origin for sharing request
app.use(morgan("common"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

/* ROUTES */
app.use("/.client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", manageRoutes);
app.use("/sales", salesRoutes);



// ito ay testing lang po