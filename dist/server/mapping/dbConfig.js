"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbConfig = {
    connectionurl: process.env.URl || "mongodb://localhost:27017",
    dbname: process.env.DBNAME || "above",
    collectionname: process.env.COLLECTION || "tag"
};
