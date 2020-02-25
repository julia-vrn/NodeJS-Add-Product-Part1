const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const userRoutes = require("./routes/shop");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set('views', 'views')


app.use('/admin', adminData.router);
app.use(userRoutes);
app.use((req, res, next) => {
  
  res.status(404).render('404', {pageTitle: "Page not found"});
  
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  //res.status(404).send("Page not found");
});



app.listen(3000);