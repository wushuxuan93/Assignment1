import express from 'express';
const router = express.Router();

import { DisplayContactsList } from '../Controllers/contacts-list';

router.get('/contacts-list', DisplayContactsList);
export default router;