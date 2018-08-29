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
const AppService_1 = require("../service/AppService");
const path = require("path");
/**
 * / route
 *
 * @class Route
 */
class AppRoute {
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        //  super();
    }
    /**
     * Create the routes.
     *
     * @class Route
     * @method create
     * @static
     */
    static create(router) {
        console.log('create ');
        //initialize th route class
        let route = new AppRoute();
        let appService = new AppService_1.AppService();
        router.get("/", (req, res, next) => {
            res.sendFile(path.resolve('dist/server/index.html'));
            res.end();
        });
        router.get("/tag", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let data = yield appService.getTags(req);
            res.send(data);
            res.end();
        }));
        router.post("/tag", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let data = yield appService.saveTags(req);
            //console.log(data)
            if (data.id) {
                res.send({ id: data.id, message: 'data saved successfully' });
            }
            else {
                res.send('data not saved successfully');
            }
            res.end();
        }));
        router.put("/tag", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let data = yield appService.updateTags(req);
            if (data.result.n) {
                res.send('data updated successfully');
            }
            else {
                res.send('data not updated successfully');
            }
            res.end();
        }));
        router.delete("/tag", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let data = yield appService.deleteTags(req);
            if (data.result.n) {
                res.send('data deleted successfully');
            }
            else {
                res.send('data not deleted successfully');
            }
            res.end();
        }));
        router.all("*", (req, res, next) => {
            res.send('Bad Request');
            res.end();
        });
    }
}
exports.AppRoute = AppRoute;
