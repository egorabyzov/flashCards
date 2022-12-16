const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Them, {
        foreignKey: 'themId',
      });
    }
  }
  Question.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    themId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
