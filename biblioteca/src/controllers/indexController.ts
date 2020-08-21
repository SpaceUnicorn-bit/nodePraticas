import {Request, Response} from 'express';

class IndexController {
    
    public index (req: Request, res: Response){
        //res.send('holis');
        res.render('index', { title: 'Welcome Hell books'});
    }
}

export const indexController = new IndexController();
// export default indexController;