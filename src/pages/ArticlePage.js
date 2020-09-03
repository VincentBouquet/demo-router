import React from "react";
import {useParams} from "react-router-dom"

function ArticlePage(){
    /*const params = useParams()
    return (<h1>article {params.idArticle}</h1>)*/
    const {idArticle} = useParams()
    return (<h1>article {idArticle}</h1>)
}

export default ArticlePage