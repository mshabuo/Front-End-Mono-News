import React from 'react'
import { Link } from 'react-router-dom'


export default function ArticleCard({article}) {
    return (
        <li key={article.article_id} className="Article_card">
            <Link to={`/article/${article.article_id}`}>
        <h3 className = "ArticleCard_articleTitle">{article.title}</h3>
        </Link>
        <dl>
           <dt>By: {article.author}</dt>
           <dt>Date: {article.created_at}</dt>
           <dt>Comments: {article.comment_count}</dt>
        </dl>
        </li>
    )
}
