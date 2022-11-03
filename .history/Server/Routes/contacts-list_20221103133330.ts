import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

//import { DisplayContactsList } from '../Controllers/contacts-list';
import { DisplayAddPage, DisplayContactsListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contacts-list';
/* GET /clothing-list page. */
router.get('/contacts-list', DisplayContactsListPage);

/* GET - display /clothing-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

/* GET - display /clothing-list/edit/:id page. */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* POST - process /clothing-list/add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /clothing-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);
//router.get('/contacts-list', AuthGuard, DisplayContactsList);
export default router;