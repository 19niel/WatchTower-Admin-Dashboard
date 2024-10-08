import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import accountsRoutes from "./routes/accounts.js";
import reportsRoutes from "./routes/reports.js";

// data imports
import User from "./models/User.js";
import Product from './models/Products.js';
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import {dataUser, dataProduct, dataProductStat, dataTransaction} from "./data/index.js";


import {dataCitizen, dataReports, dataOverallReportStat} from "./data/watchtowerfiles.js"
import Citizen from "./models/Citizen.js";
import Report from "./models/Report.js";
import Rescuer from "./models/Rescuer.js";
import OverallStat from './models/OverallStat.js';



/* Configuration */
dotenv.config()
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy( { policy : "cross-origin"})); // this allowed cross origin for sharing request
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());



/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

app.use("/accounts", accountsRoutes);
app.use("/reports", reportsRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000; // allows us to access all the environment variable from .env
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() =>{
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    // Only Add Data One Time
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // User.insertMany();
    //
    //Transaction.insertMany(dataTransaction);
    //Citizen.insertMany(citizenAccounts);
    //OverallStat.insertMany(dataOverallReportStat);
}).catch((error) => console.log(`${error} did not connect`))