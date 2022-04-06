import React from "react"
import { useEffect, useState } from "react"
import * as api from "../Utils/api"
import { Link } from "react-router-dom"

export default function Nav() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    api.getArticlesTopics().then(({ data }) => {
      setTopics(data)
    })
  }, [])

  return (
    <>
      <div>
        <ul className="nav_list">
          <Link to={"/"} className="nav_item">
            HOME
          </Link>
          {topics.map(topic => {
            return (
              <>
                <li key={topic.slug} className="nav_item">
                  <Link to={`/articles/${topic.slug}`} className="nav_item">
                    {topic.slug.toUpperCase()}
                  </Link>
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}
