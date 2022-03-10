import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../Utils/api'


export default function SingleArticle() {
    const [article, setArticle] = useState([]);

    const { article_id } = useParams();

    useEffect(()=>{
    api.getArticleById(article_id).then((res)=>{
setArticle(res)
})
    },[article_id])

    return (
        
           <article className="Single_article">
                <h4>{article.title}</h4>
                <p>{article.body}</p>
                <p>{article.comment_count}</p>
                 <p>{article.votes}</p>
                   <p>{article.author}</p>

        </article>
    )
}
