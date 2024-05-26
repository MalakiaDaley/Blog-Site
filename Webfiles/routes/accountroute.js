const express = require("express");
const rateLimiting = require("express-rate-limit");
const router = express.Router();

const limitCreate = rateLimiting({
    windowMs: 10*60*1000,
    max: 3,
})

router.post("/create", limitCreate, (req, res) => {
    const accNumber = Math.floor(Math.random() * 10 ** 12)

    connection.connect((err) => {
        if (err) {
            console.log(err)
        }

    })

    connection.query("INSERT INTO public(accountNumber) VALUES(?)", accNumber, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
    res.setHeader("Authorization", toString(accNumber))
    res.status(200).send({
        accountNumber: accNumber
    })
    
})

module.exports = router;