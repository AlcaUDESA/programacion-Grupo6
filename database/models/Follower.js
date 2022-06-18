module.exports = (sequelize, dataTypes) =>{
    let alias = 'Follower'
    let cols = {

        
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        follower_id: {
            type: dataTypes.INTEGER,
          },
        following_id: {
            type: dataTypes.INTEGER,
          },
        created_at: {
            type: dataTypes.DATE
          },
        updated_at: {
            type: dataTypes.DATE
          },
    };
    let config = {
      tableName: 'follower', 
      timestamps: false,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  
    const Follower = sequelize.define(alias,cols,config);

    

    return Follower

}