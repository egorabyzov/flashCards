import express from 'express';
import { Question } from '../../db/models';

const router = express.Router();

router.get('/theme/:id', async (req, res) => {
  const { id } = req.params;
  const questions = await Question.findAll({ where: { themeId: id } });
//   res.render('Layout', { questions });
});

export default router;
