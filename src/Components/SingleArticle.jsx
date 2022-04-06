import React from "react"
import Footer from "./Footer"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import * as api from "../Utils/api"
import ArticleComments from "./ArticleComments"
import { UserContext } from "../Contexts/UserContext"

export default function SingleArticle() {
  const [article, setArticle] = useState([])
  const [articleComments, setArticleComments] = useState([])
  const [vote, setVote] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [activeVote, setActiveVote] = useState(false)
  const [activeComment, setActiveComment] = useState(false)
  const [newComment, setNewComment] = useState([])
  const [submitButtonText, setSubmitButtonText] = useState("Submit")
  const [postMsg, setPostMsg] = useState(null)
  const [showComments, setShowComments] = useState(false)

  const { loggedInUser } = useContext(UserContext)

  // params
  const { article_id } = useParams()

  //UseEffect
  useEffect(() => {
    api.getArticleById(article_id).then(article => {
      setArticle(article)
      setIsLoading(false)
    })

    api.getArticleCommentsById(article_id).then(comment => {
      setArticleComments(comment.data)
      setIsLoading(false)
    })
  }, [article_id])

  const updateVote = value => {
    setVote(currentVote => currentVote + value)
    api.patchVote(article_id, value).catch(() => {
      setVote(0)
      alert("Opps,votes can't be updated!")
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitButtonText("Uploading...")
    api.postNewComment(article_id, newComment, loggedInUser).then(comment => {
      setArticleComments(currentComments => {
        return [...currentComments, comment]
      })
      setPostMsg("")
      setActiveComment(true)
      setIsLoading(false)
    })
    setSubmitButtonText("Submit")
    setNewComment("")
  }

  return (
    <>
      <div className="SingleArticle_section">
        <article className="Single_article">
          <h4 className="SingleArticle_ArticleTitle">{article.title}</h4>
          <p>{article.body}</p>
          <p>
            {" "}
            <img
              src="https://img.icons8.com/material-outlined/16/000000/comments--v2.png"
              onClick={() => {
                setShowComments(!showComments)
              }}
            />
            {article.comment_count}
          </p>
          <p className="SingleArticle_author">
            <img src="https://img.icons8.com/ios/16/000000/user--v3.png" />{" "}
            {article.author}
          </p>
          <p>
            {" "}
            <img src="https://img.icons8.com/ios/16/000000/thumb-up--v1.png" />{" "}
            {vote}
          </p>
          <button
            onClick={() => {
              updateVote(1)
              setActiveVote(true)
            }}
            disabled={activeVote}
          >
            ^
          </button>
          <button
            onClick={() => {
              updateVote(-1)
              setActiveVote(false)
            }}
            disabled={!activeVote}
          >
            v
          </button>
        </article>
      </div>
      {showComments && (
        <div className="Single_article_comments">
          {articleComments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <ArticleComments
                  author={comment.author}
                  body={comment.body}
                  date={comment.created_at}
                  comment_id={comment.comment_id}
                  article_id={comment.article_id}
                  setArticleComments={setArticleComments}
                  setPostMsg={setPostMsg}
                />
              </li>
            )
          })}

          <section className="PostComments_form">
            <form onSubmit={handleSubmit}>
              <textarea
                type="text"
                placeholder="Join the conversation..."
                className="comment_input"
                value={newComment}
                onChange={event => {
                  setNewComment(event.target.value)
                }}
              ></textarea>
              <>{postMsg}</>
              <button
                type="submit"
                disabled={activeComment}
                className="Submit_Button"
              >
                {submitButtonText}
              </button>
            </form>
          </section>
        </div>
      )}
      <div className="Newcomment_form"></div>
      <Footer />
    </>
  )
}
