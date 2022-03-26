import React from "react"
import { useEffect, useState, useContext } from "react"
import * as api from "../Utils/api"
import { UserContext } from "../Contexts/UserContext"
import moment from "moment"

export default function ArticleComments({
  date,
  body,
  author,
  comment_id,
  setArticleComments,
  setPostMsg,
}) {
  const customCreatedAt = moment(date).utc().fromNow()
  //UserContext
  const { loggedInUser } = useContext(UserContext)

  //UseState
  const [msg, setMsg] = useState(null)
  const [deleteButton, setDeleteButton] = useState(null)

  //HandleDelete
  const handleDelete = event => {
    event.preventDefault()
    api.deleteComment(comment_id).then(() => {
      setArticleComments(currentComments => {
        setDeleteButton("Deleting...")
        return currentComments.filter(comment => {
          return comment.comment_id !== comment_id
        })
      })
    })
    setDeleteButton(null)
    setPostMsg(null)
    setMsg("")
  }

  //UseEffect
  useEffect(() => {
    if (author === loggedInUser.username) {
      setDeleteButton(
        <p onClick={handleDelete} className="ArticleComments_DeleteButton">
          {" "}
          X{" "}
        </p>
      )
    }
  }, [])
  //Render
  return (
    <>
      <div className="Comments_singleComment">
        <p className="SingleArticle_author">
          <img src="https://img.icons8.com/ios/16/000000/user--v3.png" />
          {author.charAt(0).toUpperCase() + author.slice(1)}
        </p>
        <p className="SingleArticle_body">{body}</p>
        <>{deleteButton}</>
        <p>
          {" "}
          <img src="https://img.icons8.com/ios/16/000000/clock--v1.png" />
          {customCreatedAt}
        </p>
        <p>{msg}</p>
        <br></br>
      </div>
    </>
  )
}
