import routes from "../routes";


export const getJoin = (req, res) =>
    res.render("join", { pageTitle: "Join" });

export const postJoin = (req, res) => {
    // console.log(req.body) // thanks to bodyParser!
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400); //'Status code 400' means 'Bad Request'.
        res.render("join", { pageTitle: "Join" });
    } else {
        //To Do: Register user
        //To Do: Log the user in
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Log In" });
}
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // To Do: Process log out
    res.redirect(routes.home);
}

export const users = (req, res) =>
    res.render("users", { pageTitle: "Users" });
export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "Edit Profile" });
export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "User Detail" });
export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });
