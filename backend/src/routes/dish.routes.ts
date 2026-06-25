import { Router } from 'express';
import * as dishController from '../controllers/dish.controller';

const router = Router();

router.get('/', dishController.getDishes);
router.patch('/:dishId', dishController.toggleStatus);

export default router;
