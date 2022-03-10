import React, {useEffect, useState} from 'react'
import { UserContext } from '../Contexts/UserContext'
import { useContext } from 'react'


const Moe = {
    username: 'Moe',
    avatar_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Davatar&psig=AOvVaw20VHV2ytXttMw9uzRcL-Sx&ust=1646755880943000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPC12PaxtPYCFQAAAAAdAAAAABAD"
};

export default function Users() {

    const [user, setUser] = useState({})
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)

    useEffect(()=>{
        setUser(Moe)
    }, []);

    const logIn = (newUser) => {
        setLoggedInUser(newUser)
    }
    return (
    <main>
      <h2>Users</h2>
      <ul className="Users__List">
        {users.map((user) => {
          return (
            <li key={user.username} className="User__profile">
              <h3>{user.username}</h3>
              <img
                className="Nav_avatar"
                src={loggedInUser.avatar_url}
                alt="sfdg"
              ></img>
              <button onClick={() => logIn(user)}>Log in</button>
            </li>
          );
        })}
      </ul>
    </main>
    )
}
