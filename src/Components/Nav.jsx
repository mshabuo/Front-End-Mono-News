import React from 'react'
import { useEffect, useState} from 'react'
import * as api from "../Utils/api"
import {Link} from 'react-router-dom'

export default function Nav() {

    const [topics, setTopics] = useState([]);

useEffect(() => {
         api.getArticlesTopics().then(({data})=>{  
             setTopics(data)   
        })

    }, [])

  return (
      <>
 <ul className="nav_list">
     {topics.map((topic)=>{
         console.log("map", topic)
         return (
             <li key={topic.slug} className="nav_item">
                <Link to={`/articles/${topic.slug}`} className="nav_link">{topic.slug}</Link> 
             </li>
         )
     })}
 </ul>
  </>

  )};