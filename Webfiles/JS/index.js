const app = require("express")();
const sqlmanager = require("mysql")
const connection = sqlmanager.createConnection({
    host:"mysql-200-130.mysql.prositehosting.net",
    user:"Someguyagain",
    password:"S0meguyagain!0915",
    database:"dbManagent"
})
const PORT = 3000;

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
})

app.post("/create", (req, res) => {
    const accNumber = Math.floor(Math.random() ** 12)
    connection.query("INSERT INTO public(accountNumber) VALUES(?)", accNumber, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
    res.status(200).send({
        accountNumber: accNumber
    })

    console.log(req.body)
    console.log(req.baseUrl)
    console.log(req.headers)
    console.log(req.query)
    console.log(req.params)
})

app.listen(
    PORT,
    () => console.log("hello we're alive")
)
