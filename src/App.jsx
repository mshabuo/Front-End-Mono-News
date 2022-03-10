
import './App.css';
import Nav from './Components/Nav'
import {useState} from "react";
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserContext} from "./Contexts/UserContext"
import SingleArticle from "./Components/SingleArticle"

function App() {
  
const [loggedInUser, setLoggedInUser] = useState({
    username: 'Moe',
    avatar_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw2IhKolXgBTwBe-5wPPjznI&ust=1646916406943000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKj4se6HufYCFQAAAAAdAAAAABAD"
});

const userIsLoggedIn = loggedInUser !== null;

return (
  <BrowserRouter>
  <UserContext.Provider
  value={{loggedInUser, setLoggedInUser, userIsLoggedIn}}
  >
<div className="App">
   <Header />
   <Nav />
   <Routes>
     <Route path="/" element={<ArticlesList />} />
      <Route path="/articles/:topic" element={<ArticlesList />} />
      <Route path="/article/:article_id" element ={<SingleArticle />} />
   </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
