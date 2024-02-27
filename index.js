import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

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
    },
    {
        id: 3,
        name: "zain",
        email: "zain@gmail.com"
    }
]

app.get("/", (req, res) => {
    res.send(users)
});

app.post("/", (req, res) => {
    users.push({ id: users.length + 1, ...req.body });
    res.send({ message: "user added successfully" });
});

app.delete("/user/:id", (req, res) => {
    const index = users.findIndex(v => v.id === Number(req.params.id));
    users.splice(index, 1);
    res.send({ message: "user deleted successfully" });
});

app.put("/user/:id", (req, res) => {
    const index = users.findIndex(v => v.id === Number(req.params.id));
    users.splice(index, 1, {id: Number(req.params.id), ...req.body});
    res.send({ message: "user updated successfully"});
})

app.listen(PORT, () => {
    `server is running on ${PORT}`
});


// delete method
// ----------------------------
// fetch("/user/3", {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
// })
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))



// post method
// ---------------------------
// fetch("/", {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "zakir",
//         email: "zakir@gmail.com"
//     })
// })
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))


// put method
// ------------------------------------------
// fetch("/user/1", {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "try",
//         email: "try@gmail.com"
//     })
// })
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))