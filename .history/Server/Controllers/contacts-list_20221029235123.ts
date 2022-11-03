import express from 'express';

import Contacts from '../Models/contacts';
import { UserDisplayName } from '../Util';

export function DisplayContactsList(req: express.Request, res: express.Response, next: express.NextFunction) {
    Contacts.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contacts List', page: 'contacts-list', contacts: contactsCollection });
    });
}