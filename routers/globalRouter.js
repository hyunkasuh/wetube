import express from "express";
import routes from "../routes";
import {
    home,
    search
} from "../controllers/videoController";
import {
    getLogin,
    postLogin,
    getJoin,
    postJoin,
    logout
} from "../controllers/userController";
import { onlyPublic } from "../localsMiddleware";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPublic, logout);


// globalRouter.get(routes.home, (req, res) => res.send('Home'));
// globalRouter.get(routes.join, (req, res) => res.send('Join'));
// globalRouter.get(routes.login, (req, res) => res.send('Login'));
// globalRouter.get(routes.logout, (req, res) => res.send('Logout'));
// globalRouter.get(routes.search, (req, res) => res.send('Search'));

export default globalRouter;