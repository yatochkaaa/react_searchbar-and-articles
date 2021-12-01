import Box from '@mui/material/Box';
import React from 'react';
import { Article } from '../types/types';
import { BasicCard } from './Card';

interface Props {
  articles: Article[];
}

export const ArticleList: React.FC<Props> = (props) => {
  const { articles } = props;

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '45px' }}>
      {articles.map(article => (
        <BasicCard article={article} />
      ))}
    </Box>
  );
}