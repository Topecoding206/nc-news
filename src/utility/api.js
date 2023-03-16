import axios from "axios";

const api = axios.create({
  baseURL: "https://first-backend-project-nsxj.onrender.com/api",
});

export const fetchArticles = (sort, order) => {
  const url = `/articles`;
  if (sort === "comment_count") {
    return api.get(url).then(({ data }) => {
      if (order === "desc" && sort === "comment_count") {
        return data.articles.sort((a, b) => b.comment_count - a.comment_count);
      }
      {
        return data.articles.sort((a, b) => a.comment_count - b.comment_count);
      }
    });
  }

  return api
    .get(url, {
      params: {
        sort_by: sort,
        order: order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};
export const fetchSingleArticle = (article_id) => {
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
  return api.post(`/articles/${id}/comment`, body).then(({ data }) => {
    return data.comment;
  });
};

export const fetchTopics = () => {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticlesByTopic = (topic, sort, order) => {
  return api
    .get("/articles", {
      params: {
        topic: topic,
        order: order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const deleteComment = (id) => {
  return api.delete(`/comments/${id}`).then(({ data }) => {
    return data.comment;
  });
};
