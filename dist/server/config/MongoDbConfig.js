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
const dbConfig_1 = require("../mapping/dbConfig");
const mongodb_1 = require("mongodb");
class MongodbConnection {
    /**
     * Constructor
     *
     * @class MongoDbConnection
     * @constructor
     */
    constructor() {
    }
    /**
     * Create the routes.
     *
     * @class MongoDbConnection
     * @method connection
     * @static
     */
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let client = yield mongodb_1.MongoClient.connect(dbConfig_1.MongoDbConfig.connectionurl, { useNewUrlParser: true });
                try {
                    return yield client.db(dbConfig_1.MongoDbConfig.dbname);
                }
                catch (err) {
                    throw new Error("Error connecting database. " + err.Message);
                }
            }
            catch (err) {
                console.log(err);
                throw new Error("Error instantiating database. " + err.Message);
            }
        });
    }
    CreateConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return MongodbConnection.poolConnectionObj = yield this.connection();
        });
    }
    CloseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield MongodbConnection.poolConnectionObj.close();
            }
            catch (err) {
                throw new Error("Error in  connection. " + err.Message);
            }
        });
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    static getQueryConnectionObj() {
        return __awaiter(this, void 0, void 0, function* () {
            return MongodbConnection.poolConnectionObj;
        });
    }
}
exports.MongodbConnection = MongodbConnection;
