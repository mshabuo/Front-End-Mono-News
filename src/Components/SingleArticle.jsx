import React from "react"
import Footer from "./Footer"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import * as api from "../Utils/api"
import ArticleComments from "./ArticleComments"
import { UserContext } from "../Contexts/UserContext"
import ErrorPage from "./ErrorPage"

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
  const [errorAlert, setErrorAlert] = useState(null)

  const { loggedInUser, isLoggedIn } = useContext(UserContext)

  const { article_id } = useParams()

  useEffect(() => {
    api.getArticleById(article_id).then(article => {
      setArticle(article)
      setVote(article.votes)
      setIsLoading(false)
    })

    api
      .getArticleCommentsById(article_id)
      .then(comment => {
        setArticleComments(comment.data)
        setIsLoading(false)
      })
      .catch(err => {
        setErrorAlert(err.message)
        setIsLoading(false)
      })
  }, [article_id])

  const updateVote = value => {
    if (!isLoggedIn) {
      setActiveVote(false)
      alert("Please log in to vote!")
      return null
    }
    setVote(currentVote => currentVote + value)
    api.patchVote(article_id, value).catch(err => {
      setVote(0)
      setErrorAlert(err.message)
      setIsLoading(false)
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (newComment.length < 1) {
      setActiveComment(false)
      alert("Posting empty comment is not permitted!")
      return null
    }
    setSubmitButtonText("Uploading...")
    api
      .postNewComment(article_id, newComment, loggedInUser)
      .then(comment => {
        setArticleComments(currentComments => {
          return [...currentComments, comment]
        })
        setPostMsg("")
        setActiveComment(true)
        setIsLoading(false)
      })
      .catch(err => {
        setVote(0)
        setErrorAlert(err.message)
        setIsLoading(false)
      })
    setSubmitButtonText("Submit")
    setNewComment("")
  }

  if (errorAlert) return <ErrorPage error={errorAlert} />
  return (
    <>
      <div className="SingleArticle_section">
        <article className="Single_article">
          <h4 className="SingleArticle_ArticleTitle">{article.title}</h4>
          <p>{article.body}</p>
          <p>
            {" "}
            <img src="https://img.icons8.com/material-outlined/16/000000/comments--v2.png" />
            {article.comment_count}
          </p>
          <button
            onClick={() => {
              setShowComments(!showComments)
            }}
            className="SingleArticle_ViewButton"
          >
            View Comments &nbsp; &nbsp;
            <span className="Article-Arrow">&#10230;</span>
          </button>
          <p className="SingleArticle_author">
            <img src="https://img.icons8.com/ios/16/000000/user--v3.png" />
            {article.author}
          </p>
          <p>
            <img src="https://img.icons8.com/ios/16/000000/thumb-up--v1.png" />
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
              <button type="submit" className="Submit_Button">
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
