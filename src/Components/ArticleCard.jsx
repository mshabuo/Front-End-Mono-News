import React from 'react'

export default function ArticleCard({article}) {
    return (
        <li key={article.article_id}>
        <h3>{article.title}</h3>
        <dl className="Article_card">
           <dt>By: {article.author}</dt>
           <dt>Date: {article.created_at}</dt>
           <dt>Votes: {article.votes}</dt>
        </dl>
        </li>
    )
}
