const path = require("path");
const express = require("express");
const rootDirectory = require("../utilities/path");
const router = express.Router();
const products = [];


router.get('/add-product', (req, res)=>{
  res.render('add-product', {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
  //res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
  //console.log(rootDirectory);
  //injecting root directory
  //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  /*res.send('<form action="/admin/product" method="POST"><input name="title" type="text"><button type="submit">Submit</button></form>');*/
  
});

router.post('/add-product', (req, res, next)=>{
  //res.send("<h1>Hello World from product</h1>");
  console.log("hello from product");
  products.push({title: req.body.title});

  res.redirect("/");
});


//module.exports = router;
exports.router = router;
exports.products = products;

