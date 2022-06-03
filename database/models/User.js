module.exports = (sequelize, DataTypes) =>{
    let alias = 'users'
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
      timestamps: false,
    };
  
    const users = sequelize.define(alias,cols,config);
  
    users.associate = (models) =>{
      Product.belongsTo(models.User, {
        as: 'User',
        foreignKey: 'usuario_id'
      })
    };
  
    return users

}