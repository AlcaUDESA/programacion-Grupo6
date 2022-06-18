module.exports = (sequelize, dataTypes) =>{
    let alias = 'User'
    let cols = {

        
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false
      },
      dni: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      contra: {
        type: dataTypes.STRING,

        allowNull: false,
      },
      email: {
        type: dataTypes.STRING,
        
        allowNull: false,
      },
      birthdate: {
       type: dataTypes.DATE,
       allowNull: false,
      },
      picture: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: dataTypes.DATE
      },
      updated_at: {
        type: dataTypes.DATE
      },
    };
    let config = {
      tableName: 'Usuario', 
      timestamps: false,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  
    const User = sequelize.define(alias,cols,config);
  
    User.associate = (models) =>{
      User.hasMany(models.Product, {
        as: 'Product',
        foreignKey: 'usuario_id'

      }),
      User.hasMany(models.Coments, {
          as: 'Coments',
          foreignKey: 'usuario_id'
        })

      };
    
  
    
    return User;

}