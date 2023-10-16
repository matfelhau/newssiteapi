import { useState } from 'react';
import axios from 'axios';
import './news.css'; 
import "@fontsource/inter";


export default function News({ initialArticles }) {
  const [articles, setArticles] = useState(initialArticles);
  const [category, setCategory] = useState(''); 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=yR5XTw1Hs3vzGzDqUIu6uhkRXGl9WwUK`);
      console.log(response)
      setArticles(response.data.results);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className='container'>
      <h1>Front pages news from New York Times</h1>
      <div>
        <select onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="home">Home</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
          </li>
        ))}
      </ul>
      <p>PS: New York Times apiet er treigt noen ganger, så må kanskje refreshe siden et par ganger...</p>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const apiKey = process.env.NY_TIMES_API_KEY;
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
    const initialArticles = response.data.results;
    return {
      props: { initialArticles },
    };
  } catch (error) {
    console.error('Error fetching initial news:', error);
    return {
      props: { initialArticles: [] },
    };
  }
}