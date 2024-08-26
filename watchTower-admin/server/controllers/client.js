import Product from "../models/Products.js";
import ProductStat from "../models/ProductStat.js";

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