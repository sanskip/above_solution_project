"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const compression = require("compression");
const AppRoute_1 = require("./server/route/AppRoute");
/**
 * The server.
 *
 * @class Server
 */
class AppServer {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        this.httpPort = 3000;
        this.createApp();
        this.config();
        this.routes();
        this.listen();
    }
    /**
     * NodeJS  application.
     *
     * @class Server
     * @method inIt
     * @static
     * @return Returns the newly created INSTANCE for this app.
     */
    static inIt() {
        return new AppServer();
    }
    /**
     * creating app
     *
     * @class Server
     * @method createApp
     */
    createApp() {
        console.log('createapp');
        this.app = express();
    }
    /**
     * server will listen on this port
     *
     * @class Server
     * @method listen
     */
    listen() {
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
    config() {
        //compress response object
        this.app.use(compression());
        //handle cross origin
        this.app.use(cors());
        //add static paths
        this.app.use(express.static(path.join(__dirname + '')));
        //use json form parser middlware
        this.app.use(bodyParser.json({}));
        //use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        //use cookie parser middleware
        this.app.use(cookieParser("SECRET_GOES_HERE"));
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
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
    routes() {
        this.router = express.Router();
        //IndexRoute
        AppRoute_1.AppRoute.create(this.router);
        //use router middleware
        this.app.use(this.router);
    }
}
exports.AppServer = AppServer;
