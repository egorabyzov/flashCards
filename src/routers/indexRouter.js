import express from 'express';
import { Them } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const ques = await Them.findAll();
  const initState = { ques };
  res.render('Layout', initState);
});

export default router;
