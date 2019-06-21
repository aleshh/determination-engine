import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article.js';


function ArticleList(props) {
  return (
    <>
      {props.articles.map(article => (
        <Article article={article} key={article.id}/>
      ))}
    </>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleList