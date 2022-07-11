const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json("je suis dans le /characters  mon poulet")
})
router.get("/:id", (req, res) => {
	console.log("-------------------------", req.params)
	// console.log("je suis la !!!")
	const { id } = req.params
	res.status(200).json(`je suis dans le /${id}`)
})

module.exports = router
