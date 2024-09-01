import Product from "../models/Products.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

import Citizen from "../models/Citizen.js";
import Report from "../models/Report.js"

export const getProducts = async (req, res) => {
    try {
        // Fetch all products
        const products = await Product.find();

        // Combine products with their stats
        const productWithStats = await Promise.all(
            products.map(async (product) => {
                // Fetch stats for the current product
                const stats = await ProductStat.findOne({ productId: product._id });

                // Combine product data with its stats
                return {
                    ...product.toObject(), // Convert Mongoose document to plain JavaScript object
                    stat: stats || {} // Add stats or an empty object if no stats are found
                };
            })
        );

        // Send the combined result as JSON
        res.status(200).json(productWithStats);
    } catch (error) {
        // Send error message if something goes wrong
        res.status(404).json({ message: error.message });
    }
};

export const getCustomers = async ( req, res) => {
    try {
      const customers = await User.find({ role: "user" }).select("-password");
      res.status(200).json(customers);
    } catch (error) {
        // Send error message if something goes wrong
        res.status(404).json({ message: error.message });
    }
}

export const getTransactions = async (req, res) => {
    try {
        // sort should look like this: {"field": "userId", sort: "desc"}
        const { page = 1, pageSize = 20, sort = null, search = ""} = req.query; // sending it to the frontend

        // formatted sort should look like { userId: -1}
        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: sortParsed.sort = "asc" ? 1 : -1
            };

            return sortFormatted;
        }
        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const transactions = await Transaction.find({
            $or: [
                { cost: { $regex: new RegExp(search, "i")} }, // checking for cost using regular search
                { userId: { $regex: new RegExp(search, "i")} } // checking for user id using regular search
            ],
           
        })
            .sort(sortFormatted)
            .skip(page * pageSize) // skipping pages
            .limit(pageSize); // giving all the term of what the user request in the frontend
        
        const total = await Transaction.countDocuments({
            name: {$regex: search, $options: "i"} // getting the total count
        })

        res.status(200).json({
            transactions, 
            total
        });
      } catch (error) {
          // Send error message if something goes wrong
          res.status(404).json({ message: error.message });
      }
}






// WatchTower  
export const getCitizens = async(req, res) => {
    try {
      const citizens = await Citizen.find({ role: "citizen" }).select("-password");
      res.status(200).json(citizens);
    } catch (error) {
        // Send error message if something goes wrong
        res.status(404).json({ message: error.message });
    }
}


export const getReports = async (req, res) => { // use this for reports
    try {
        // sort should look like this: { "field": "userId", "sort": "desc"}
        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;
        //const tReports = await Report.find({ isVerified: true });


        // formatted sort should look like { userId: -1}
        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: sortParsed.sort = "asc" ? 1 : -1
            };

            return sortFormatted;
        }
        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const report = await Report.find({ // to be able to only search these 2 columns
            $or: [
                { disasterType: { $regex: new RegExp(search, "i")} }, // checking for cost using regular search
                { reporterId: { $regex: new RegExp(search, "i")} } // checking for user id using regular search
            ],
           
        })
        .sort(sortFormatted)
        .skip(page * pageSize) // skipping pages
        .limit(pageSize); // giving all the term of what the user request in the frontend
    
    const total = await Transaction.countDocuments({
        name: {$regex: search, $options: "i"} // getting the total count
    });

    res.status(200).json({
        report, 
        total
    });
  } catch (error) {
      // Send error message if something goes wrong
      res.status(404).json({ message: error.message });
  }
}  