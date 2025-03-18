import { DataTypes } from "sequelize";
import sequelize from "../config";
import Producto from "./producto";

const Description = sequelize.define(
  "Description",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Producto.hasMany(Description, { onDelete: "CASCADE" });
Description.belongsTo(Producto);

export default Description;
