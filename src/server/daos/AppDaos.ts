import { applicationFactoryInstance } from '../ApplicationFactory'
/**
 * Constructor
 *
 * @class AppDaos
 */
export class AppDaos {

private connection: any
  /**
   * Constructor
   *
   * @class AppDaos
   * @constructor
   */
  constructor() {
this.connection=applicationFactoryInstance.getDbFactory();
  }



  /**
   * get method of Daos.
   *
   * @return void
   */
  public getTags() {
    return this.connection.MONGODB.collection('tag').find({}).toArray();
  }
  /**
   * save tag method of Daos.
   *
   * @return void
   */
  public saveTags(data:any) {
    return this.connection.MONGODB.collection('tag').save(data);
  }
  /**
   * update tag method of Daos.
   *
   * @return void
   */
  public updateTags(data:any):any {
    //return this.connection.MONGODB.collection('tag').save(data);
      return this.connection.MONGODB.collection('tag').updateOne({ "_id" :data.id },{ $set: { "tagname" : data.tagname} });
  }
  /**
   * delete tag method of Daos.
   *
   * @return void
   */
  public deleteTags(tag:string):any {
    return this.connection.MONGODB.collection('tag').deleteOne({"tagname" : tag });
  }
}
