module.exports = function (sequelize, Datatypes) {
    var User = sequelize.define("User", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 75],
                notContains: [
                    "fuck", "shit", "bitch", "ass", "phuk", "fuk", "sheit", "sheeeit", "shat", "schit", "shitt", "biiiiitch", "betch", "bich"
                ],
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 16],
                notContains: [
                    "fuck", "shit", "bitch", "ass", "phuk", "fuk", "sheit", "sheeeit", "shat", "schit", "shitt", "biiiiitch", "betch", "bich"
                ],
            }
        },
        user_identifier: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                len: [10, 10]
            }
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Event, {
                onDelete: "cascade"
        })
    };

    return User;
};