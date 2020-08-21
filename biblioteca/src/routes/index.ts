import { Router, Request } from 'express';

const router:Router = Router();

import {indexController} from '../controllers/indexController'

router.get('/', indexController.index);

router.get('/add', (req: Request, res) => {
    res.send('Form');
});

export default router;

