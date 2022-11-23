import express from 'express';
import { UserController } from "../controller/UserController";

const routers = express.Router();

routers.get("/", (req, res) => {
    return res.json({
        name: "avaliacao :)",
        message: "",
        version: "1.0.0",
    })
});

routers.post("/users", new UserController().store);

export default routers;