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
const MongoDbConfig_1 = require("./config/MongoDbConfig");
class ApplicationFactory {
    constructor() {
        this.factory = {};
        this.loadConfiguration();
    }
    loadConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            this.factory['MONGODB'] = yield MongoDbConfig_1.MongodbConnection.getInstance().CreateConnection();
        });
    }
    static Instance() {
        return this._instance || (this._instance = new this());
    }
    getDbFactory() {
        return this.factory;
    }
}
exports.applicationFactoryInstance = ApplicationFactory.Instance();
