import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util/index';

import { DisplayAddPage, DisplayContactsListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contacts-list';
/* GET /contacts-list page. */
router.get('/contacts-list', AuthGuard, DisplayContactsListPage);

/* GET - display /contacts-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

/* GET - display /contacts-list/edit/:id page. */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* POST - process /contacts-list/add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /contacts-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /contacts-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export default router;