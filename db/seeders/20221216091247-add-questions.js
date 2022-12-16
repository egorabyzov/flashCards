/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [{
      question: 'Радость, Страх, Гнев, Брезгливость and Печаль управляют чьими эмоциями в фильме Головоломка?',
      answer: 'Райли',
      themId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какой фильм, написанный, снятый и спродюсированный Джеймсом Кэмероном, стал самым кассовым фильмом своего времени?',
      answer: 'Титаник',
      themId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какие животные воспитывали Маугли в Книге джунглей?',
      answer: 'Волки',
      themId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какое млекопитающее известно самым мощным укусом в мире?',
      answer: 'Бегемот',
      themId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какая птица ассоциируется у вас с миром?',
      answer: 'Голубь',
      themId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какое популярное морское существо обладает способностью клонировать себя?',
      answer: 'Медуза',
      themId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Какая страна является самой подверженной землетрясениям страной в мире?',
      answer: 'Япония',
      themId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Как называется самый маленький океан?',
      answer: 'Северный Ледовитый океан',
      themId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question: 'Где находится “Испанская лестница”?',
      answer: 'Италия',
      themId: 3,
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
