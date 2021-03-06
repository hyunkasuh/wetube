import passport from "passport";
import routes from "../routes";
import User from "../models/User"

export const getJoin = (req, res) =>
    res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res, next) => {
    // console.log(req.body) // thanks to bodyParser!
    // console.log(req.user);
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400); //'Status code 400' means 'Bad Request'.
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            //Register user        
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Log In" });
}
export const postLogin =
    passport.authenticate('local',
        {
            failureRedirect: routes.login,
            successRedirect: routes.home
        }
    );

export const githubLogin = passport.authenticate('github');

export const githubLoginCallback = async (_, __, profile, cb) => {
    // console.log(accessToken, refreshToken, profile, cb);
    const { _json: { id, avatar_url, name, email } } = profile;
    // console.log(profile);
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id;
            user.save();
            console.log(user);
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl: avatar_url
        });
        return cb(null, newUser);
    } catch (error) {
        return cb(error);
    }
};

export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (_, __, profile, cb) => {
    const { _json: { id, name, email } } = profile;
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.facebookId = id;
            user.avatarUrl = `http://graph.facebook.com/${id}/picture?type=large`;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            facebookId: id,
            avatarUrl: `http://graph.facebook.com/${id}/picture?type=large`
        });
        return cb(null, newUser);
    } catch (error) {
        return cb(error);
    }
};

export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
}

export const userDetail = async (req, res) => {
    const { params: { id } } = req;
    try {
        const user = await User.findById(id);
        res.render("userDetail", { pageTitle: "User Detail", user });
    } catch (error) {
        res.redirect(routes.home);
        console.log(error);
    }
}

export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });
