import express from 'express';
import { CallbackError } from 'mongoose';
//import Contacts from '../Models/contacts';
import { UserDisplayName } from '../Util';
import Contacts from '../Models/contacts';
// Display Functions

//(R)ead in CRUD
export function DisplayContactsListPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Contacts.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contacts List', page: 'contacts-list', contacts: contactsCollection, displayName: UserDisplayName(req) });
    });
}
// Display (E)dit page
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        let id = req.params.id;

        // pass the id to the db

        // db.contacts.find({"_id": id})

        Contacts.findById(id, {}, {}, (err, contactsItemToEdit) => {
            if (err) {
                console.error(err);
                res.end(err);
            }

            // show the edit view
            res.render('index', { title: 'Edit', page: 'update', contacts: contactsItemToEdit, displayName: UserDisplayName(req) });
        });
    }

    // Display (C)reate page
    export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        // show the edit view
        res.render('index', { title: 'Add', page: 'update', contacts: '', displayName: UserDisplayName(req) });
    }

    // Process Functions

    // Process (E)dit page
    export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        let id = req.params.id;

        // instantiate a new Contacts Item
        let updatedContactsItem = new Contacts
            ({
                "_id": id,
                "Name": req.body.name,
                "number": req.body.number,
                "Email": req.body.email,
            });
  
        // find the contacts item via db.contacts.update({"_id":id}) and then update
        Contacts.updateOne({ _id: id }, updatedContactsItem, function(err: CallbackError) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            // edit was successful -> go to the movie-list page
            res.redirect('/contacts-list');
        });
    }

    // Process (C)reate page
    export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        // instantiate a new Contacts
        let newContact = new Contacts
            ({
                "Name": req.body.name,
                "Number": req.body.number,
                "Email": req.body.email,
            });

        // db.clothing.insert({clothing data is here...})
        Contacts.create(newContact, function(err: CallbackError) {
            if (err) {
                console.error(err);
                res.end(err);
            }

            res.redirect('/contacts-list');
        });
    }

    // Process (D)elete page
    export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void {
        let id = req.params.id;

        // db.clothing.remove({"_id: id"})
        Contacts.remove({ _id: id }, function(err: CallbackError) {
            if (err) {
                console.error(err);
                res.end(err);
            }

            res.redirect('/contacts-list');
        });
    };