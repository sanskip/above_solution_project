import {MongodbConnection} from './config/MongoDbConfig'

class ApplicationFactory {
private static _instance: ApplicationFactory;
private  factory={};

private constructor(){
  this.loadConfiguration();
}
private  async loadConfiguration() {
  this.factory['MONGODB']=await  MongodbConnection.getInstance().CreateConnection();


}
public static  Instance() {
    return this._instance || (this._instance = new this());
}
public  getDbFactory(){
    return this.factory;
}
}
export const applicationFactoryInstance = ApplicationFactory.Instance();
