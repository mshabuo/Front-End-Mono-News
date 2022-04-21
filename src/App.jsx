import "./App.css"
import Nav from "./Components/Nav"
import { useState } from "react"
import Header from "./Components/Header"
import ArticlesList from "./Components/ArticlesList"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from "./Contexts/UserContext"
import SingleArticle from "./Components/SingleArticle"
import LogInPage from "./Components/LogInPage"
import ErrorPage from "./Components/ErrorPage"

function App() {
  const [loggedInUser, setLoggedInUser] = useState("SIGN IN")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn }}
      >
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/articles/:topic" element={<ArticlesList />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="/login" element={<LogInPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
