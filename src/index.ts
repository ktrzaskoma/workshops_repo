import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Plz use typescript bro")
})

app.listen(3000, () => {
    console.log("Listening at http://localhost:3000")
})