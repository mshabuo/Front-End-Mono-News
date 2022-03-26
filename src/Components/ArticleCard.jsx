import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

export default function ArticleCard({ article }) {
  const customCreatedAt = moment(article.created_at).utc().fromNow()
  return (
    <li key={article.article_id} className="Article_card">
      <Link to={`/article/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <dl>
        <dt className="ArticleCard_author">
          <img src="https://img.icons8.com/ios/16/000000/user--v3.png" />
          {article.author.charAt(0).toUpperCase() + article.author.slice(1)}
        </dt>
        <dt className="ArticleCard_createdAt">
          <img src="https://img.icons8.com/ios/16/000000/clock--v1.png" />
          {customCreatedAt}
        </dt>
        <dt className="ArticleCard_commentCount">
          <img src="https://img.icons8.com/material-outlined/16/000000/comments--v2.png" />{" "}
          {article.comment_count}
        </dt>
      </dl>
    </li>
  )
}
