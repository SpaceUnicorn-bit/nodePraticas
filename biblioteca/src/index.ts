import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';


//importing routes
import IndexRoutes from './routes';

//init
express();

const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Routes
app.use('/books', IndexRoutes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});