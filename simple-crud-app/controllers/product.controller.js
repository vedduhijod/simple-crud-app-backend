import express from 'express';
import Product from '../models/product.model.js';


const getProducts = async (req, res) => {
try {
  const products = await Product.find({});
  res.status(200).json(products);
} catch (error) {
  res.status(500).json({ message: error.message });
}

}

const getProduct = async (req, res) => {
      try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const createProduct = async (req, res) => {
   try {
     const products = await Product.create(req.body);
     res.status(200).json(products);
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
}

const updateProduct = async (req, res) => {
        try {
          const product = await Product.findByIdAndUpdate(req.params.id);
          if (product) {
            product.name = req.body.name;
            product.quantity = req.body.quantity;
            product.price = req.body.price;
            product.image = req.body.image;
            const updatedProduct = await product.save();
            res.status(200).json(updatedProduct);
          } else {
            res.status(404).json({ message: "Product not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (product) {
        res.status(200).json({ message: "Product deleted" });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

export { getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
 }