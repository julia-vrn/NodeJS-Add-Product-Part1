const path = require("path");
const express = require("express");
const rootDirectory = require("../utilities/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res) =>{
  console.log(adminData.products);
  const products = adminData.products;
  
  res.render("shop", {
    prods: products, 
    pageTitle: "Shop",
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true  
  });
  //res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
});

module.exports = router;