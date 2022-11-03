import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayContactsList } from '../Controllers/contacts-list';

router.get('/contacts-list', AuthGuard, DisplayContactsList);
export default router;