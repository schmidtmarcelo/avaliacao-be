import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

const Asset = sequelize.define("assets", {
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE
});

export default Asset;