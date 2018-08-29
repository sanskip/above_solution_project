import { MongoDbConfig } from "../mapping/dbConfig";
import {Db,MongoClient}  from "mongodb";

export class MongodbConnection  {
private static poolConnectionObj;
private static _instance: MongodbConnection;
  /**
   * Constructor
   *
   * @class MongoDbConnection
   * @constructor
   */
  private constructor() {
  }
  /**
   * Create the routes.
   *
   * @class MongoDbConnection
   * @method connection
   * @static
   */

  private async connection():Promise<Db> {
    try{
      let client = await MongoClient.connect(MongoDbConfig.connectionurl,{ useNewUrlParser: true });
      try{
          return await client.db(MongoDbConfig.dbname);
      }catch(err){
          throw new Error("Error connecting database. " + err.Message);
      }
   }catch(err){
      console.log(err)
      throw new Error("Error instantiating database. " + err.Message);
      }
  }

  public  async  CreateConnection()  {
    return MongodbConnection.poolConnectionObj=await this.connection();
  }
  public async  CloseConnection()  {
    try{
      await MongodbConnection.poolConnectionObj.close()
    }catch(err){
      throw new Error("Error in  connection. " + err.Message);
    }

  }
  public static getInstance() {
    return this._instance || (this._instance = new this());
}
  public static async getQueryConnectionObj() {
      return MongodbConnection.poolConnectionObj;
  }

}
