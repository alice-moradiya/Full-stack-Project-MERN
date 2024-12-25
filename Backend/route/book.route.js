import express  from 'express';
import {getBook} from '../controllers/book.controller.js';

const router = express.router();

router.get('/', getBook);

export default router;