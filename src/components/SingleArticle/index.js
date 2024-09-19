import './SingleArticle.css';
import { Routes, Route, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleArticle = () => {
  let {id} = useParams()
  console.log("id is " + id)

  const articles = useSelector(state=>state.articleState.entries);
  const article = articles.find((object)=>object.id === id)
  console.log(article)

  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt='home'
      />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
