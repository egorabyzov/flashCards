/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Thems', [{
      them: 'Cinema',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      them: 'Animals',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      them: 'Geography',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
