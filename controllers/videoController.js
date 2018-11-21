export const home = (req, res) => res.send("Home from controller...");
export const search = (req, res) => res.send("search from controller...");
export const videos = (req, res) => res.send("videos from controllers...");
export const upload = (req, res) => res.send("videos from controllers...");
export const videoDetail = (req, res) => res.send("video detail from controllers...");
export const editVideo = (req, res) => res.send("edit video from controllers...");
export const deleteVideo = (req, res) => res.send("delete video from controllers...");
// don't forget to export them, in order to use in globalRouter.js