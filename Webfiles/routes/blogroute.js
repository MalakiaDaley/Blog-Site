const express = require("express");
const rateLimiting = require("express-rate-limit");
const router = express.Router();

router.use("/profile/:userid", (req, res) => {
    const userId = req.params.userid
})

router.get("/getposts", (req, res) => {
    const query = req.query

    connection.connect((err) => {
        if (err) {
            console.log(err)
        }

    })

    res.status(200).send({
        
    })

    connection.query("select authorID, time, content, likes from posts;", (error, results) => {
        console.log(results);
    })
})

module.exports = router