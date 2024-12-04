import { Router } from 'express';
const router = Router();
import { 
    getAllUsers, 
    activateUser, 
} from '../../../controllers/admin/users.js';
router.route('/').get(getAllUsers);
router.route('/:username').put(activateUser);
export { router as userRoutes };
