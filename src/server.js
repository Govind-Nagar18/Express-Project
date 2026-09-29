import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the Express!")
});

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);

    res.send(`User ID: ${req.params.id}`);
});

app.get("/users", (req, res) => {
    console.log(req.query);

    res.json(req.query);
});

app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});