const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const product = new Product({ name, price, stock });
        await product.save();
        res.status(201).json({ message: 'Product created successfully!', product });
    } catch (error) {
        res.status(500).json({ error: 'Error creating product' });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};
