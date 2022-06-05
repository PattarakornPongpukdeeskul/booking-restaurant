import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./router/index.js"
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: true }))
app.use(router)
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(1001, () => {
  console.log("Start server at port 1001.")
})
