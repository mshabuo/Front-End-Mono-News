import React from 'react'
import { useEffect, useState} from 'react'
import * as api from "../Utils/api"

export default function Nav() {

    const [topics, setTopics] = useState([]);

useEffect(() => {
         api.getArticlesTopics().then(({data})=>{
            
             setTopics(data)
            
        })
    }, [])
console.log("state", topics)
  return (
 <ul className="nav_list">
     {topics.map((topic)=>{
         console.log("map", topic)
         return (
             <li key={topic.slug} className="nav_item">
                 {topic.slug}
             </li>
         )
     })}
 </ul>

  )};