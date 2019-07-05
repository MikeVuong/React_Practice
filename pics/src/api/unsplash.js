import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2f2bde6483c4000df7987dcc38aec35556ee9507047a0371cd488b33a613c77d"
  }
});
