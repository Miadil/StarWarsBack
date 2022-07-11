const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const characters = require("./routes/characters")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use("/characters", characters)

app.get("/", (req, res) => {
	res.send("js suis dans le  /")
})

app.listen(4242, () => console.log("Express Server http://localhost:4242"))
