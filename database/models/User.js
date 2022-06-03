module.exports = (sequelize, DataTypes) =>{
    let alias = 'User'
    let cols = {

        
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      contraseña: {
        type: DataTypes.STRING,

        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        
        allowNull: false
      },
      birthdate: {
       type: DataTypes.DATE,
       allowNull: false
      },
      picture: {
        type: DataTypes.STRING,
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