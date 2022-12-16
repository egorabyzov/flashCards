const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Them extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Question, {
        foreignKey: 'themId',
      });
    }
  }
  Them.init({
    them: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Them',
  });
  return Them;
};
