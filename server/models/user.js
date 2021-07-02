var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, Sequelize) { 
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
            type: Sequelize.TEXT
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

    User.beforeSave((user, options) => {
        if (user.changed('password')) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
      });
      User.prototype.comparePassword = function (passw, cb) {
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
        });
      };
      User.associate = function(models) {
        // associations can be defined here
      };

    return User;
}