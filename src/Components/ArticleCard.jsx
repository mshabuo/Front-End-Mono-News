import React from 'react'
import { Link } from 'react-router-dom'


export default function ArticleCard({article}) {
    return (
        <li key={article.article_id} className="Article_card">
            <Link to={`/article/${article.article_id}`}>

        <h3 className = "ArticleCard_articleTitle">{article.title}</h3>

        </Link>
        <dl>
           <dt>
               <img src="https://img.icons8.com/ios/16/000000/user--v3.png"/> 
                {article.author}</dt>
           <dt>
               <img src="https://img.icons8.com/ios/16/000000/clock--v1.png"/>
                {article.created_at}
            </dt>
            <dt>
               <img src="https://img.icons8.com/material-outlined/16/000000/comments--v2.png"/>  {article.comment_count}
            </dt>
            </dl>
        </li>
    )
}
