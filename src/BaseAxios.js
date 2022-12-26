import Axios from "axios";

const axios = Axios.create({
  baseURL:
    "https://expensetracker-env.eba-y3tvvutt.ap-northeast-1.elasticbeanstalk.com/",
});

export default axios;
