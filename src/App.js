import logo from "./header-logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "Enter your News Api Key"
      )
      .then((res) => {
        setArticles(res.data.articles.slice(0, 40));
        // console.log(res.data.articles.slice(0, 20));
        // content.forEach((article) => {
        //   if (article.urlToImage != null) {
        //     setArticles((prevarticles) => [...prevarticles, article]);
        //   }
        // });
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="article-box">
        {articles.map((article, index) => {
          const content = article.content.split("[+");
          return (
            <div key={index} className="article">
              <img
                src={article.urlToImage}
                className="article-picture"
                alt="News Detail"
              />
              <div>
                <h1
                  className="article-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {article.title}
                </h1>
                <p className="article-content">{content[0]}</p>
              </div>
              <div>
                <a
                  href="{article.content}"
                  target={"_blank"}
                  className="article-link"
                >
                  Learn More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
