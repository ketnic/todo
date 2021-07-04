module.exports = function (sequelize, Sequelize) {
    var CalendarHasCollaborator = sequelize.define('CalendarHasCollaborator', {
        CalendarId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          }, 
          UserId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
    });
    CalendarHasCollaborator.associate = function (models) {
        ///
    };
    return CalendarHasCollaborator;
}