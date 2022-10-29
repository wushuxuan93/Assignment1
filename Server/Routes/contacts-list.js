"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contacts_list_1 = require("../Controllers/contacts-list");
router.get('/contacts-list', contacts_list_1.DisplayContactsList);
exports.default = router;
//# sourceMappingURL=contacts-list.js.map