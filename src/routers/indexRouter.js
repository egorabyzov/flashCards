import express from 'express';
import { Question } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

router.get('/theme/:id', async (req, res) => {
  const { id } = req.params;
  const questions = await Question.findAll({ where: { themId: id } });
  console.log(questions)
  res.render('Layout', { questions });
});

export default router;

