import React from 'react'


export default function ArticleCard({article}) {
    return (
        <li key={article.article_id} className="Article_card">
        <h3>{article.title}</h3>
        <dl>
           <dt>By: {article.author}</dt>
           <dt>Date: {article.created_at}</dt>
           <dt>Comments: {article.comment_count}</dt>
        </dl>
        </li>
    )
}
