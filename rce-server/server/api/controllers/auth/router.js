import * as express from 'express';
import controller from './controller';
import isLoggedIn from '../../middlewares/isLogged.handler';

export default express
  .Router()
  .post('/', controller.execute)
  .get('/', isLoggedIn, controller.fetchUser);
