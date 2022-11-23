import User from "../models/user";
import Wallet from "../models/wallet";

User.hasMany(Wallet, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Wallet.belongsTo(User, {foreignKey: "userId", as: "user"});

export default {User, Wallet}