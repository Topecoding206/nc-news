import axios from "axios";

const api = axios.create({
  baseURL: "https://first-backend-project-nsxj.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
