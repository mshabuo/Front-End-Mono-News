import { findAllByTestId } from '@testing-library/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../Utils/api'
import ArticleComments from './ArticleComments'


export default function SingleArticle() {

    const [article, setArticle] = useState([]);
    const [articleComments, setArticleComments] = useState([]);
    const [vote, setVote] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [activeVote, setActiveVote] = useState(false)
   
// params 
    const { article_id } = useParams();


    useEffect(()=>{
    api.getArticleById(article_id).then((article)=>{
    setArticle(article)
    setIsLoading(false)
    });

    api.getArticleCommentsById(article_id).then((comment)=>{
    console.log(comment)
    setArticleComments(comment.data)
    setIsLoading(false)
        })
    },[])
 
    const updateVote = (value) => {
        setVote((currentVote) => currentVote + value)
        api.patchVote(article_id, value)
        .catch(()=>{
            setVote(0)
            alert("Opps,votes can't be updated!")
        })
    }
 
    if(isLoading) return <h4> Articles are loading...</h4>
    return (
        <>
        <div className="Single_article_section">
        <article className="Single_article">
        <h4>{article.title}</h4>
        <p>{article.body}</p>
        <p> <img src="https://img.icons8.com/material-outlined/16/000000/comments--v2.png"/> 
                     {article.comment_count}</p>
                   <p><img src="https://img.icons8.com/ios/16/000000/user--v3.png"/> {article.author}</p>
                    <p> <img src="https://img.icons8.com/ios/16/000000/thumb-up--v1.png"/> {vote}</p>
                       <button onClick={()=>{
               updateVote(1)
               setActiveVote(true)
           }} disabled={activeVote}>
               ^
           </button>
           <button onClick={()=>{
               updateVote(-1)
               setActiveVote(false)
           }} disabled={!activeVote}>
                v
           </button>
        </article>
        </div>
        <div className="Single_article_comments">
            {articleComments.map((comment)=>{
                return (
                    <li key={comment.comment_id}>
                        <ArticleComments 
                        author={comment.author_id}
                        body={comment.body}
                        date={comment.created_at}
                        comment_id={comment.comment_id}
                        article_id={comment.article_id}
                        />
                    </li>
                )
            })}
        <article>

        </article>
        </div>
        </>
    )
}
