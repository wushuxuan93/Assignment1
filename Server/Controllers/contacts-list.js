"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContactsListPage = void 0;
const Util_1 = require("../Util");
const contacts_1 = __importDefault(require("../Models/contacts"));
function DisplayContactsListPage(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contacts List', page: 'contacts-list', contacts: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayContactsListPage = DisplayContactsListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.findById(id, {}, {}, (err, contactsItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'update', contacts: contactsItemToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', contacts: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContactsItem = new contacts_1.default({
        "_id": id,
        "Contact_Name": req.body.name,
        "Contact_Number": req.body.number,
        "Contact_Email": req.body.email,
    });
    contacts_1.default.updateOne({ _id: id }, updatedContactsItem, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contacts_1.default({
        "Contact_Name": req.body.name,
        "Contact_Number": req.body.number,
        "Contact_Email": req.body.email,
    });
    contacts_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contacts-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
;
//# sourceMappingURL=contacts-list.js.map