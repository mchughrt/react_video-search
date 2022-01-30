import axios from "axios";

const KEY = "AIzaSyC6jLYa0tFbZVrxLM68C1JwGhK02voQXoU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
