import { Router } from 'express';
const router = Router();
import {
    createUser,
    login
} from '../../../controllers/users/auth.js'

router.route('/').post(createUser);
router.route('/logi').post(login);

export default router;