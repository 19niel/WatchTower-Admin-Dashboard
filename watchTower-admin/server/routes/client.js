import express from "express";
import { getProducts, 
        getCustomers, 
        getTransactions, 
        
        // WatchTower Data
        getCitizens, 
        getReports,
 } from "../controllers/client.js";
const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

// WatchTower Routes
router.get("/citizens", getCitizens);
router.get("/reports", getReports);

export default router;