import express from "express"
import bodyParser from "body-parser"
import https from "https"
import path from "path"
import { fileURLToPath } from "url"
import mongoose from "mongoose"
import "dotenv/config"

const port = process.env.PORT
const adminName = process.env.ADM_NAME
const adminPassword = process.env.ADM_PASSWORD

mongoose.connect(`mongodb+srv://${adminName}:${adminPassword}@cluster0.nkmq9yg.mongodb.net/wikiDB`)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema)

app.listen(port, () => {
    console.log(`server run on port::${port}`)
})