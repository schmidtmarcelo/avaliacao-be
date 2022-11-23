const Asset = require("../models/asset").default;
import User from "../models/user";
import Wallet from "../models/wallet";

User.hasMany(Wallet, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Wallet.belongsTo(User, {foreignKey: "userId", as: "user"});

Wallet.belongsToMany(Asset, {
    foreignKey: "walletId",
    through: "wallet_assets",
    as: "assets",
});

Asset.belongsToMany(Wallet, {
    foreignKey: "assetId",
    through: "wallet_assets",
    as: "wallets",
});

module.exports = {User, Wallet, Asset};