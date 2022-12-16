import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.post('/login', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

export default router;
