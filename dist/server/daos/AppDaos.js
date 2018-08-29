"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationFactory_1 = require("../ApplicationFactory");
/**
 * Constructor
 *
 * @class AppDaos
 */
class AppDaos {
    /**
     * Constructor
     *
     * @class AppDaos
     * @constructor
     */
    constructor() {
        this.connection = ApplicationFactory_1.applicationFactoryInstance.getDbFactory();
    }
    /**
     * get method of Daos.
     *
     * @return void
     */
    getTags() {
        return this.connection.MONGODB.collection('tag').find({}).toArray();
    }
    /**
     * save tag method of Daos.
     *
     * @return void
     */
    saveTags(data) {
        return this.connection.MONGODB.collection('tag').save(data);
    }
    /**
     * update tag method of Daos.
     *
     * @return void
     */
    updateTags(data) {
        //return this.connection.MONGODB.collection('tag').save(data);
        return this.connection.MONGODB.collection('tag').updateOne({ "_id": data.id }, { $set: { "tagname": data.tagname } });
    }
    /**
     * delete tag method of Daos.
     *
     * @return void
     */
    deleteTags(tag) {
        return this.connection.MONGODB.collection('tag').deleteOne({ "tagname": tag });
    }
}
exports.AppDaos = AppDaos;
