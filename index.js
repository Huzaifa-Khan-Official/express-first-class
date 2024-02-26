import express from "express";

const app = express();

app.use(express.json());

const PORT = 8000;

const users = [
    {
        id: 1,
        name: "huzaifa",
        email: "huzaifa@gmail.com"
    },
    {
        id: 2,
        name: "khan",
        email: "khan@gmail.com"
    }
]

app.get("/", (req, res) => {
    res.send(users)
})

app.post("/user", (req, res) => {
    users.push({id: users.length , ...req.body})
    res.send("user added successfully")
})


app.listen(PORT, () => {
    console.log(`port is running on ${PORT}`);
})