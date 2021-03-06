const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

// Primeira rota
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);



// routes.get("/", (req, res) => {
//   Product.create({
//     title: 'React Native',
//     description: 'Build Native apps with React',
//     url: 'http://github.com/facebook/react-native'
//   })

//   return res.send("Hello Iago dos Santos!")
// })

module.exports = routes;