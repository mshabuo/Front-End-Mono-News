import React from 'react'
import ArticleCard from './ArticleCard'
import { useEffect, useState } from 'react'
import * as api from "../Utils/api"
import { useParams } from 'react-router-dom'

export default function ArticlesList() {
const {topic} = useParams();

const [articles, setArticles] = useState([])

    useEffect(() => {

        if(topic) {
            api.getArticlesByTopic(topic).then((res)=>{
                setArticles(res)
            })
        } else {
         api.getArticles().then((res)=>{
          setArticles(res)
         
        })
    }
    }, [topic])
    return (
    <div>
        <ul className="Article_list">
        {articles.map((article)=>{
            return <ArticleCard key ={article.article_id} article = {article} />
        })}
        </ul>
    </div>
        )}
