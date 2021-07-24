import express from 'express';
const router = express.Router();
import catchAsync from '../utils/catchAsync';
import userController from '../controllers/user';

router.get('/', async (req, res) => {
  res.send('Welcome to Face AI API...');
});

router.post('/login', catchAsync(userController.login));
router.post('/register', catchAsync(userController.register));

export default router;