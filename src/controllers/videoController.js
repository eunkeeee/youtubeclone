import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    console.log("Start");
    const videos = await Video.find({}); // JS will wait in this line.
    console.log(videos);
    console.log("Finish");
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("server-error", { error });
  }
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1]; // video index : 0, 1, 2 VS id : 1, 2, 3
  return res.render("watch", { pageTitle: "Watch" });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1]; // video index : 0, 1, 2 VS id : 1, 2, 3
  return res.render("edit");
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const { title } = req.body;
  return res.redirect("/");
};
