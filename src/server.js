import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { pathMiddleware } from './middlewares/mid';
import indexRouter from './routers/indexRouter';
import apiRouter from './routers/apiRouter';
import jsxRender from './util/jsxRender';

require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pathMiddleware);
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`The server has started on port ${PORT}`);
});
