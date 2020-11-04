import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4fb8f.cloudfunctions.net/api", //API URL (cloud function)
});

export default instance;

//For LOCAL TESTING
//http://localhost:5001/clone-4fb8f/us-central1/api
