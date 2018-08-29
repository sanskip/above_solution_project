export const MongoDbConfig:any ={
      connectionurl:process.env.URl|| "mongodb://localhost:27017",
      dbname:process.env.DBNAME|| "above",
      collectionname: process.env.COLLECTION|| "tag"

};
