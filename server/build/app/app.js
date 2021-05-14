"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const users_routes_config_1 = require("./users/users.routes.config");
class App {
    constructor() {
        this.port = 3000;
        this.routes = [];
        this.expressApp = express_1.default();
        this.expressApp.use(express_1.default.json());
        // here we are adding the UserRoutes to our array,
        // after sending the Express.js application object to have the routes added to our app!
        this.routes.push(new users_routes_config_1.UsersRoutes(this.expressApp));
        this.expressApp.use(express_1.default.static(path_1.default.resolve("./") + "/build/frontend"));
        // this is a simple route to make sure everything is working properly
        this.expressApp.get('/', (req, res) => {
            res.status(200).send(`Requested root path.`);
        });
    }
    run() {
        const server = http_1.default.createServer(this.expressApp);
        server.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}
exports.App = App;
