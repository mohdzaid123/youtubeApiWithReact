import axios from "axios";

const KEY =
  "AIzaSyDL4ob8kaL6L9lionjitsjkjaijdQG_hSerwYFovkUTpy[pr[tprr[rt[prpt";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
