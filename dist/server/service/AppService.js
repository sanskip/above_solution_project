"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppDaos_1 = require("../daos/AppDaos");
const uuid = require("uuid/v4");
/**
 * Constructor
 *
 * @class AppService
 */
class AppService {
    /**
     * Constructor
     *
     * @class AppService
     * @constructor
     */
    constructor() {
        //initialize variables
        this.appDaos = new AppDaos_1.AppDaos();
    }
    /**
     * get method of service.
     *
     * @return void
     */
    getTags(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.appDaos.getTags();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    /**
     * save tag method of service.
     *
     * @return void
     */
    saveTags(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let body = req.body;
                //console.log(body)
                let uid = uuid();
                body['_id'] = uid;
                let data = yield this.appDaos.saveTags(req.body);
                if (data.result.n) {
                    return { id: uid };
                }
                else {
                    return { id: 'undefined' };
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    /**
     * update tag method of service.
     *
     * @return void
     */
    updateTags(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.appDaos.updateTags(req.body);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    /**
     * delete tag method of service.
     *
     * @return void
     */
    deleteTags(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.appDaos.deleteTags(req.headers.tag);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.AppService = AppService;
