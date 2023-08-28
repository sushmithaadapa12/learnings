module.exports = (sequelize, Sequelize) =>{
    const emp = sequelize.define("emp", {
        emp_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: {type: Sequelize.STRING },
        email: {type: Sequelize.STRING },
        password: {type: Sequelize.STRING }
    },{
        tableName: 'emp',
        freezeTableName: true, timestamps: false
    });
    return emp;
};