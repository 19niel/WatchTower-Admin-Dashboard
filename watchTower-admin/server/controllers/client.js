import Product from "../models/Products.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // cycling trhough all the products


        const productWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({ // find the product stat with a specific id
                    productId: product._id
                });
                return { // combining all into a one object
                    ...product.doc,
                    stat,
                };
            })
        );
            
        res.status(200).json(productWithStats);
    } catch (error){
        res.status(404).json({message: error.message})
    }
}