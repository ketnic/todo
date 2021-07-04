
module.exports = function (sequelize, Sequelize) {
    var Calendar = sequelize.define('Calendar', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    Calendar.associate = function (models) {
        Calendar.hasMany(models.Task, {as: "Tasks"});
        Calendar.belongsToMany(models.User, {
            through: 'CalendarHasCollaborators'
        });
        Calendar.belongsTo(models.User, {
            foreignKey: "UserId",
            as: "User",
        })
    };
    return Calendar;
}