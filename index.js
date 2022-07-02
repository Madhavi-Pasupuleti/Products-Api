const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config()
app.use(express.json())
app.use(cors())

const connect = require("./configs/db")
const products = require("./controllers/ProductsControllers")

app.use("/api/products", products)

app.listen(process.env.PORT || 3000 , async (req, res) => {
    try{
        await connect()
        console.log("Connected to DB")
        console.log(`listening on PORT ${process.env.PORT}`)
    }
    catch(err){
        console.log(err.message)
    }
});