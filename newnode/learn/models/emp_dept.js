module.exports = (sequelize, Sequelize) => {
    const emp_dept = sequelize.define("emp_dept", {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        emp_id:{type: Sequelize.INTEGER },
        dept: {type: Sequelize.STRING },
        salary: {type: Sequelize.INTEGER }
    }, {
        tableName: 'emp_dept',
        freezeTaleName: true ,timestamps: false
    });

    return emp_dept;
};