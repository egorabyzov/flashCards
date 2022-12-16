import express from 'express';
import { Question, User } from '../../db/models';

const router = express.Router();

router.get('/theme/:id', async (req, res) => {
  const { id } = req.params;
  const questions = await Question.findAll({ where: { themeId: id } });
//   res.render('Layout', { questions });
});

router.post('/login', async (req, res) => {
  await User.create(req.body);
  res.sendStatus(200);
});

export default router;
