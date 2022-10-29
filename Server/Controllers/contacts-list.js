"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactsList = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
function DisplayContactsList(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contacts List', page: 'contacts-list', contacts: contactsCollection });
    });
}
exports.DisplayContactsList = DisplayContactsList;
//# sourceMappingURL=contacts-list.js.map