import { NextFunction, Request, Response, Router } from "express";
import { AppService } from "../service/AppService";

import * as path from "path";
/**
 * / route
 *
 * @class Route
 */
export class AppRoute  {


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

  public static create(router: Router):void {
    console.log('create ');
    //initialize th route class
      let route=new AppRoute();
      let appService=new AppService();
      router.get("/",  (req: Request, res: Response, next: NextFunction) => {
              res.sendFile( path.resolve('dist/server/index.html') );
              res.end();
      });

      router.get("/tag", async (req: Request, res: Response, next: NextFunction) => {
             let data= await appService.getTags(req);
              res.send(data)
              res.end();
      });
      router.post("/tag", async(req: Request, res: Response, next: NextFunction) => {
        let data= await appService.saveTags(req);
        //console.log(data)
        if(data.id){
          res.send({id:data.id,message:'data saved successfully'})
        }else{
          res.send('data not saved successfully')
        }

         res.end();
      });
      router.put("/tag", async (req: Request, res: Response, next: NextFunction) => {

          let data= await appService.updateTags(req);
          if(data.result.n){
            res.send('data updated successfully')
          }else{
            res.send('data not updated successfully')
          }
          res.end();
    });
    router.delete("/tag", async (req: Request, res: Response, next: NextFunction) => {
        let data= await appService.deleteTags(req);
        if(data.result.n){
          res.send('data deleted successfully')
        }else{
          res.send('data not deleted successfully')
        }
        res.end();
  });

    router.all("*", (req: Request, res: Response, next: NextFunction) => {
        res.send('Bad Request');
      res.end();
    });
  }




}
