const Invoice = require('../models/Invoice');
const Product = require('../models/Product');

exports.createInvoice = async (req, res) => {
    try {
        const { customer, items } = req.body;

        let total = 0;
        for (let item of items) {
            const product = await Product.findById(item.product);
            if (!product || product.stock < item.quantity) {
                return res.status(400).json({ error: 'Insufficient stock for product' });
            }
            total += product.price * item.quantity;
            product.stock -= item.quantity;
            await product.save();
        }

        const invoice = new Invoice({ customer, items, total });
        await invoice.save();
        res.status(201).json({ message: 'Invoice created successfully!', invoice });
    } catch (error) {
        res.status(500).json({ error: 'Error creating invoice' });
    }
};

exports.getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate('items.product');
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching invoices' });
    }
};
