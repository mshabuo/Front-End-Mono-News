import axios from "axios";

const api = axios.create ({
    baseURL: "https://gogest.herokuapp.com/api"
});

export const getArticles = () => {
    return api.get("/articles")
    .then((res)=>{
return res.data.articles
    })
}

export const getArticlesTopics = () => {
    return api.get("/topics")
    .then((res)=>{
return res.data
    })
}
export const getArticlesByTopic = (topic) => {
    return api.get(`/articles?topic=${topic}`)
    .then((res)=>{
return res.data.articles
    })
}

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then((res)=>{
        return res.data.article[0]
    })
}

export const getArticleCommentsById = (article_id) => {
    console.log("api params", article_id)
    return api.get(`/articles/${article_id}/comments`).then((res)=>{
        return res
    })
}
 export const patchVote = (article_id, value) => {
     return api.patch(`/articles/${article_id}`, {
         votes: value,
     })
     .then((res) =>{
        return res
     }).catch((err)=>{
         console.log(err)
     })
    };

    export const patchArticleCommentVote = (article_id, value) => {
    console.log("api params", article_id)
    return api.patch(`/articles/${article_id}/comments`, {
        votes: value
    })
    .then((res)=>{
      return res  
    })
    .catch((err)=>{
        console.log(err)
    })
}
 