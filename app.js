const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')
const products = require('./data/products.json')
const productRouter = express.Router()


const app = express()
const PORT = process.env.PORT

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views")
app.set("views engine", 'ejs')

productRouter.route("/").get((req, res) => {
    res.render("products.ejs",
        products,
    )
})

productRouter.route("/:id").get((req, res) => {
    const id = req.params.id
    res.send("Hello Product is " +id)
})

app.use("/products", productRouter)

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(PORT, () => {
    debug('listening is on ' + chalk.green(PORT))
})