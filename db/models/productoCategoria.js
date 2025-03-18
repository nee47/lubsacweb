import sequelize from "../config";
import Categoria from "./categoria";
import Producto from "./producto";

const ProductoCategoria = sequelize.define(
  "ProductoCategoria",
  {},
  {
    timestamps: true,
  }
);

Producto.belongsToMany(Categoria, {
  through: ProductoCategoria,
  foreignKey: "id_producto",
});
Categoria.belongsToMany(Producto, {
  through: ProductoCategoria,
  foreignKey: "id_categoria",
});

export default ProductoCategoria;
