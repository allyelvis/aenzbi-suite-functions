const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const InvoiceController = require('../controllers/InvoiceController');

// Product routes
router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getProducts);

// Invoice routes
router.post('/invoices', InvoiceController.createInvoice);
router.get('/invoices', InvoiceController.getInvoices);

module.exports = router;
