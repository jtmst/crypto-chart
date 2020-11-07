const express = require("express");
const app = express();
const router = require("./router.js")

app.use(express.static("./dist"))
app.use('/', router)


const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}`))