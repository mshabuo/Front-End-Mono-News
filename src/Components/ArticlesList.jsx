import React from 'react'
import ArticleCard from './ArticleCard'
import { useEffect, useState } from 'react'
import * as api from "../Utils/api"
import { useParams } from 'react-router-dom'

export default function ArticlesList() {
const {topic} = useParams();

const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(topic) {
            api.getArticlesByTopic(topic).then((res)=>{
                setArticles(res)
                setIsLoading(false)
            })
        } else {
         api.getArticles().then((res)=>{
          setArticles(res)
         setIsLoading(false)
        })
    }
    }, [topic])

    if(isLoading) return <h4>Articles are loading...</h4>
    return (
        <>
        <div>
        </div>
    <div>
        <ul className="Article_list">
        {articles.map((article)=>{
            return <ArticleCard key ={article.article_id} article = {article} />
        })}
        </ul>
    </div>
    </>
        )}
