const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    customer: { type: String, required: true },
    items: [{ 
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
