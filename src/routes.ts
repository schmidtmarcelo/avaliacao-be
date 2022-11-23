import express from 'express';
import UserController from "../controller/userController";

const routers = express.Router();

routers.get("/", (req, res) => {
    return res.json({
        name: "avaliacao :)",
        message: "",
        version: "1.0.0",
    })
});

routers.post("/users", UserController.store);
routers.get("/users", UserController.getAll);
routers.put("/users/:id", UserController.put)
routers.delete("/users/:id", UserController.delete);

export default routers;