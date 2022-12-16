import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.post('/login', async (req, res) => {
  await User.create(req.body);
  res.sendStatus(200);
});

export default router;
