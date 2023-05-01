import express  from "express";
const app = express();
app.use( express.json())
import categorieController from "./controllers/categories.controller.js"
import subCategoriesController from "./controllers/subCategories.controller.js"
import productsController from "./controllers/products.controller.js"
import chekToken from "./middlewares/chek.token.js";
import usersController from "./controllers/users.controller.js";

app.post('/login', usersController.LOGIN)
app.post('/register', usersController.REGISTER);
app.get('/users', usersController.GET_USERS);
app.get('/users/:token', usersController.GET);

app.get('/categories', chekToken , categorieController.GET)
app.get('/categories/:id',chekToken, categorieController.GETID)
app.post('/categories',chekToken, categorieController.POST)
app.put('/categories/:id',chekToken, categorieController.PUT)
app.delete('/categories/:id',chekToken, categorieController.DELETE)

app.get('/subcategories',chekToken, subCategoriesController.GET)
app.get('/subcategories/:id',chekToken, subCategoriesController.GETID)
app.post('/subcategories',chekToken, subCategoriesController.POST)
app.put('/subcategories/:id',chekToken, subCategoriesController.PUT)
app.delete('/subcategories/:id', chekToken,subCategoriesController.DELETE)

app.get('/products',chekToken, productsController.GET)
app.get('/products/:id',chekToken, productsController.GETID)
app.post('/products',chekToken, productsController.POST)
app.put('/products/:id',chekToken, productsController.PUT)
app.delete('/products/:id',chekToken, productsController.DELETE)

app.listen(5800, () => console.log('server url: http:localhost:5800'))