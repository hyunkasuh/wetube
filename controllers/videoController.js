// import { videos } from "../db";
import routes from "../routes"; // don't need { }, since route has been 'export default'
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos: videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
    // res.send("Home from controller...");
};

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    const { query: { term: searchingBy } } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title: title,
        description: description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
// don't forget to export them, in order to use in globalRouter.js