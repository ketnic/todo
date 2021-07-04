module.exports = function (sequelize, Sequelize) {
    var Task = sequelize.define('Task', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });
    Task.associate = function (models) {
        Task.belongsTo(models.Calendar, {
            foreignKey: "CalendarId",
            as: "Calendar",
        })
    };
    return Task;
}