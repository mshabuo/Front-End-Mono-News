import React from 'react'
import ArticleCard from './ArticleCard'
import { useEffect, useState } from 'react'
import {getArticles} from "../Utils/api"

export default function ArticlesList() {

const [articles, setArticles] = useState([])

    useEffect(() => {
         getArticles().then((res)=>{
          setArticles(res)
        })
    }, [])
    return (
    <div>
        <ul className="ArticleList">
        {articles.map((article)=>{
            return <ArticleCard key ={article.article_id} article = {article} />
        })}
        </ul>
    </div>
        )}
