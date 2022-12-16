import express from 'express';
import { questions } from '../../db/models'

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/1', async (req, res) => {
  const info = await questions.findAll()
  res.render('Layout', { info })
})


export default router;

