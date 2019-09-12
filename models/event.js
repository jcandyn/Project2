
module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      time: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "General"
      },
    });
    Event.associate = function (models) {
        Event.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
    return Event;
  };
}