import express from "express";
import { getProducts, 
        getCustomers, 
        getTransactions, 
        
        // WatchTower Data
        getCitizens, 
        getReports,
        getReportsMap
 } from "../controllers/client.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

// WatchTower Routes
router.get("/citizens", getCitizens);
router.get("/reports", getReports);
router.get("/map", getReportsMap);


export default router;