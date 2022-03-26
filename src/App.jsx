
import './App.css';
import Nav from './Components/Nav'
import {useState} from "react";
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserContext} from "./Contexts/UserContext"
import SingleArticle from "./Components/SingleArticle"
import LogIn from './Components/LogIn';


function App() {
  
const [loggedInUser, setLoggedInUser] = useState({
    username: 'tickle122'
});

const [isLoggedIn, setIsLoggedIn] = useState(false)

return (
  <BrowserRouter>
  <UserContext.Provider
  value={{loggedInUser, setLoggedInUser, setIsLoggedIn}}
  >
<div className="App">
   <Header />
   <Nav />
   <Routes>
     <Route path="/" element={<ArticlesList />} />
      <Route path="/articles/:topic" element={<ArticlesList />} />
      <Route path="/article/:article_id" element ={<SingleArticle />} />
      <Route path="/login" element ={<LogIn />} />
   </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
