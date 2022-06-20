module.exports = (sequelize, dataTypes) =>{
  let alias = 'Product'
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING(100),
    },
    image: {
      type: dataTypes.STRING(100),
    },
    description: {
      type: dataTypes.TEXT,
    },
    usuario_id: {
      type: dataTypes.INTEGER,
    },
    upload_at: {
      type: dataTypes.DATE
    },
    created_at: {
      type: dataTypes.DATE
    },
    updated_at: {
      type: dataTypes.DATE
    },
  };
  
  let config = {
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'producto'
  };
  let Product = sequelize.define(alias,cols,config);

  Product.associate = (models) =>{
    Product.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'usuario_id'
    })
  }
  return Product
}