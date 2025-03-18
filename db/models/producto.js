import { DataTypes } from "sequelize";
import sequelize from "../config";

const Producto = sequelize.define(
  "Producto",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default Producto;
