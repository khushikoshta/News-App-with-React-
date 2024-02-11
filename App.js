
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&apiKey=72b9a9f58cc74ffca9a575833b59a6db`)
        .then((response) => response.json())
        .then((news) => {
          console.log(news.articles);
          setArticles(news.articles);
        })
        .catch((err) => {
        console.log("err");
      })
  },[category])

  return (
    <div className="App">
      <header className="header">
        <h1>News App</h1>

        <input type="text"
          
          onChange={(event) => {
          if (event.target.value !== "") {
            setCategory(event.target.value);
          }
          else {
            setCategory("india")
            }
          }
        }
      
          placeholder="search news here">
        
        </input>
      </header>

      <section className="news-articles">
        {
          articles.length!==0?
          articles.map((article) => {
            return (
              <News article = {article}></News>
            )
          })
            :
            <h3>Nothing to Show...</h3>
        }
       
      </section>
    </div>
  );
}

export default App;
