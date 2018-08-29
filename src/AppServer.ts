import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as compression from "compression";
import { AppRoute } from "./server/route/AppRoute";



/**
 * The server.
 *
 * @class Server
 */
export class AppServer {

  public app: express.Application;
  private router: express.Router;
  private httpPort=3000;
  /**
   * NodeJS  application.
   *
   * @class Server
   * @method inIt
   * @static
   * @return Returns the newly created INSTANCE for this app.
   */
  public static inIt(): AppServer {
    return new AppServer();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
      this.createApp();
      this.config();
      this.routes();
      this.listen();

  }

    /**
     * creating app
     *
     * @class Server
     * @method createApp
     */
    private createApp(): void {
      console.log('createapp')
        this.app = express();
    }

    /**
     * server will listen on this port
     *
     * @class Server
     * @method listen
     */
    private listen(): void {
        this.app.listen(this.httpPort, () => {
            console.log('Running server on port %s', this.httpPort);
        });
    }



  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  private config():void {
    //compress response object
  this.app.use(compression());
  //handle cross origin
  this.app.use(cors());
    //add static paths
  this.app.use(express.static(path.join(__dirname+'')));

  //use json form parser middlware
  this.app.use(bodyParser.json({}));

  //use query string parser middlware
  this.app.use(bodyParser.urlencoded({
    extended: true
  }));

  //use cookie parser middleware
  this.app.use(cookieParser("SECRET_GOES_HERE"));

  //catch 404 and forward to error handler
  this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    //cors apply//
	   res.header("Access-Control-Allow-Origin", "*");
		 res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
		 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    res.setHeader('Content-Type', 'application/json'); //set common resp format//
      err.status = 404;
      next(err);
  });

  }

  /**
    * Create router.
    *
    * @class Server
    * @method config
    * @return void
    */
  private routes():void {

    this.router = express.Router();

    //IndexRoute
    AppRoute.create(this.router);

    //use router middleware
    this.app.use(this.router);
  }

}
