var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    // firstname: {
    //     type: Sequelize.STRING,
    //     notEmpty: true
    // }, 
    // lastname: {
    //     type: Sequelize.STRING,
    //     notEmpty: true
    // }, 
    username: {
      type: Sequelize.TEXT,
      unique: true
    },
    // email: {
    //     type: Sequelize.STRING,
    //     validate: {
    //         isEmail: true
    //     }
    // }, 
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // status: {
    //     type: Sequelize.ENUM('active', 'inactive'),
    //     defaultValue: 'active'
    // } 

  });
  User.associate = function (models) {
    User.hasMany(models.Calendar),
    User.belongsToMany(models.Calendar, {
      through: 'CalendarHasCollaborators'
    })
  };


  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  User.prototype.comparePassword = function (passw, callback) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return callback(err);
      }
      callback(null, isMatch);
    });
  };
  return User;
}