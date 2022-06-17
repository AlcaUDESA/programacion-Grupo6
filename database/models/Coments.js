module.exports = (sequelize, dataTypes) =>{
    let alias = 'Coments'
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario_id: {
        type: dataTypes.INTEGER,
      },
      producto_id: {
        type: dataTypes.INTEGER,
      },
      contenido: {
        type: dataTypes.STRING(100),
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
      tableName: 'comentario'
    };
    const Coments = sequelize.define(alias,cols,config);

    Coments.associate = (models) =>{
        Coments.belongsTo(models.User, {
          as: 'User',
          foreignKey: 'usuario_id'
        })
      }
    return Coments
}