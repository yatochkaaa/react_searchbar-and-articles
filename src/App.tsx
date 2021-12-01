import { ThemeProvider } from '@mui/material/styles';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { requestArticles } from './api/api';
import './App.scss';
import { ArticleList } from './components/ArticleList';
import { Article } from './types/types';
import { theme } from './theme';
import GlobalStyles from '@mui/material/GlobalStyles';

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  
  const updateArticles = useCallback(async () => {
    const articlesFromServer = await requestArticles();
    
    setArticles(articlesFromServer);
  }, []);
  
  useEffect(() => {
    updateArticles();
  }, [updateArticles]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
  
    setSearch(value);
  }

  const articlesFilter = () => {
     return articles.filter((article: Article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
      || article.summary.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <div className="App">
      <GlobalStyles
        styles={{
          body: { fontFamily: 'Montserrat' }
        }}
      />
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <div className="search-bar">
            <label htmlFor="search-bar__area">
              <p className="search-bar__title">
                Filter by keywords
              </p>

              <input
                type="text"
                className="search-bar__area"
                id="search-bar__area"
                placeholder="The most successful IT companies in 2020"
                value={search}
                onChange={handleChange}
              />
            </label>
          </div>
        </header>

        <main className="App-main">
          <p className="section__title">Results: {articles.length}</p>
          {articles.length && <ArticleList articles={articlesFilter()} />}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
