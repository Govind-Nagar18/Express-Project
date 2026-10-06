import express from "express"

const app = express();

const users = [{ id: 0, name: "John", age: 20 }];

app.use(express.json());

//middleware
app.use((req, res, next) => {
    console.log(`request recieved : , ${req.method}, ${req.url}`)
    console.log("response sent : ", res.statusCode)
    next();
})

app.get("/", (req, res) => {
    res.send("Hello from the Express!")
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);

});

app.get("/users", (req, res) => {
    console.log(req.query);
    res.json(users);
});

app.post("/users", (req, res) => {
    const data = req.body;
    users.push({
        id: users.length + 1,
        name: data.name,
        age: data.age
    })
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});