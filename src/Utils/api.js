import axios from "axios"

const api = axios.create({
  baseURL: "https://mononews.herokuapp.com/api",
})
//GET
export const getArticles = (topic, sort_by, order) => {
  console.log("api", topic, sort_by, order)
  return api
    .get(`/articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
        order: order,
      },
    })
    .then(res => {
      return res.data.articles
    })
}

export const getArticlesByTopic = topic => {
  return api.get(`/articles?topic=${topic}`).then(res => {
    return res.data.articles
  })
}
export const getArticlesTopics = () => {
  return api.get("/topics").then(res => {
    return res.data
  })
}
export const getArticleById = article_id => {
  return api.get(`/articles/${article_id}`).then(res => {
    return res.data.article[0]
  })
}

export const getArticleCommentsById = article_id => {
  console.log("api params", article_id)
  return api.get(`/articles/${article_id}/comments`).then(res => {
    return res
  })
}

//PATCH
export const patchVote = (article_id, value) => {
  return api
    .patch(`/articles/${article_id}`, {
      votes: value,
    })
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

export const patchArticleCommentVote = (article_id, value) => {
  console.log("api params", article_id)
  return api
    .patch(`/articles/${article_id}/comments`, {
      votes: value,
    })
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

//POST
export const postNewComment = (article_id, newComment, loggedInUser) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username: loggedInUser.username,
      body: newComment,
    })

    .then(({ data: { comment } }) => {
      return comment
    })
    .catch(err => {
      console.log(err)
    })
}

//DELETE

export const deleteComment = comment_id => {
  return api.delete(`/comments/${comment_id}`).then(res => {
    return res
  })
}
