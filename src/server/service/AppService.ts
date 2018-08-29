import {Request } from "express";
import { AppDaos } from "../daos/AppDaos";
import * as uuid  from 'uuid/v4';

/**
 * Constructor
 *
 * @class AppService
 */
export class AppService {


  private appDaos=new AppDaos();

  /**
   * Constructor
   *
   * @class AppService
   * @constructor
   */
  constructor() {
    //initialize variables

  }

  /**
   * get method of service.
   *
   * @return void
   */
  public async  getTags(req:Request) {
    try{
    return await this.appDaos.getTags();
  }catch(err){
    console.log(err)
  }
  }
  /**
   * save tag method of service.
   *
   * @return void
   */
  public async saveTags(req:Request) {
    try{
    let body=req.body;
    //console.log(body)
    let uid=uuid();
    body['_id']=uid;
    let data= await this.appDaos.saveTags(req.body);
    if(data.result.n){
      return{id:uid}
    }else{
      return{id:'undefined'}
    }
  }catch(err){
    console.log(err)
  }
  }
  /**
   * update tag method of service.
   *
   * @return void
   */
  public async updateTags(req:Request) {
    try{
      return await this.appDaos.updateTags(req.body);
    }catch(err){
      console.log(err)
    }

  }

  /**
   * delete tag method of service.
   *
   * @return void
   */
  public async deleteTags(req:Request) {
    try{
      return await this.appDaos.deleteTags(req.headers.tag);
    }catch(err){
      console.log(err)
    }

  }
}
