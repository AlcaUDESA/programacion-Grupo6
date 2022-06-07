module.exports = (sequelize, dataTypes) =>{
    let alias = 'User'
    let cols = {

        
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dni: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      contra: {
        type: dataTypes.STRING,

        allowNull: false
      },
      email: {
        type: dataTypes.STRING,
        
        allowNull: false
      },
      birthdate: {
       type: dataTypes.DATE,
       allowNull: false
      },
      picture: {
        type: dataTypes.STRING,
        allowNull: false
      }
    };
    let config = {
        tableName: 'Usuario', 
      timestamps: false,
    };
  
    const User = sequelize.define(alias,cols,config);
  
    User.associate = (models) =>{
      User.hasMany(models.Product, {
        as: 'Product',
        foreignKey: 'usuario_id'
      })
    };
  
    return User

}