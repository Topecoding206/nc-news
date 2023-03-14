import axios from "axios";

const api = axios.create({
  baseURL: "https://first-backend-project-nsxj.onrender.com/api",
});

export const fetchArticles = (article_id) => {
  const url = `/articles${article_id === undefined ? "" : `/${article_id}`}`;

  return api.get(url).then(({ data }) => {
    return data;
  });
};

export const fetchComments = (article_id) => {
  return api.get(`/articles/${article_id}/comment`).then(({ data }) => {
    return data.comments;
  });
};

export const AddVote = (id, inc_votes) => {
  return api.patch(`/articles/${id}`, inc_votes);
};

export const postComment = (id, body) => {
  return api.post(`/articles/${id}/comment`, body);
};
