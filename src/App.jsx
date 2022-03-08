
import './App.css';
import Nav from './Components/Nav'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList'

function App() {
  
// const [loggedInUser, setLoggedInUser] = useState({
//   username: "JohnM",
//   user_avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Davatar&psig=AOvVaw20VHV2ytXttMw9uzRcL-Sx&ust=1646755880943000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPC12PaxtPYCFQAAAAAdAAAAABAD"
// });

// const userIsLoggedIn = loggedInUser !== null;

return (

<div className="App">

   <Header />
   <Nav />
   <ArticlesList />
    </div>
  
    
   
  );
}

export default App;
