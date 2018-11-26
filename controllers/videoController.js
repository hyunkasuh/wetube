// import { videos } from "../db";
import routes from "../routes"; // don't need { }, since route has been 'export default'

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos: videos });
    // res.send("Home from controller...");
}
export const search = (req, res) => {
    // const searchingBy = req.query.term;
    const { query: { term: searchingBy } } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload save the video
    res.redirect(routes.videoDetail(319872));
};

export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
// don't forget to export them, in order to use in globalRouter.js