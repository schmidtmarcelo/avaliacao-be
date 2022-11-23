import express from 'express';
import AssetController from '../controller/assetController';
import UserController from "../controller/userController";
import WalletController from '../controller/walletController';

const routers = express.Router();

routers.get("/", (req, res) => {
    return res.json({
        name: "avaliacao :)",
        message: "",
        version: "1.0.0",
    })
});

//USUARIOS
routers.post("/users", UserController.store);
routers.get("/users", UserController.getAll);
routers.put("/users/:id", UserController.put)
routers.delete("/users/:id", UserController.delete);

//CARTEIRAS
routers.post("/users/:userId/wallets", WalletController.store)
routers.get("/users/:userId/wallets", WalletController.getAll);
routers.put("/users/:userId/wallets/:id", WalletController.put)
routers.delete("/users/:userId/wallets/:id", WalletController.delete);

//ATIVOS
routers.post("/wallets/:walletId/assets", AssetController.store);
routers.get("/wallets/:walletId/assets", AssetController.getAll);

export default routers;