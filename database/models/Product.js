module.exports = (sequelize, DataTypes) =>{
  let alias = 'Product'
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  };
  
  let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  };

  const Product = sequelize.define(alias,cols,config);

  Product.associate = (models) =>{
    Product.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'usuario_id'
    })
  };

  return Product
}