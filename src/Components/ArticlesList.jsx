import React from "react"
import ArticleCard from "./ArticleCard"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import * as api from "../Utils/api"
import { useParams } from "react-router-dom"

export default function ArticlesList() {
  const { topic } = useParams()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState(null)
  const [order, setOrder] = useState(null)

  useEffect(() => {
    api.getArticles(topic, sortBy, order).then(res => {
      setArticles(res)
      setIsLoading(false)
    })
  }, [topic, order, sortBy])

  if (isLoading) {
    return <h4>Articles are loading...</h4>
  }
  return (
    <>
      <div className="Filter_div">
        <form>
          <label htmlFor="sort_by" className="Filter">
            Sort<span className="logo_Feature">/</span>Order
          </label>
          <select
            name="sortBy"
            onChange={event => {
              setSortBy(event.target.value)
            }}
            className="custom-select"
          >
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
            <option value="created_at">Date</option>
          </select>
          <select
            onChange={event => {
              setOrder(event.target.value)
            }}
            className="custom-select"
          >
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
        </form>
      </div>
      <div>
        <ul className="Article_list">
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />
          })}
        </ul>
      </div>
      <Footer />
    </>
  )
}
