import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Article } from '../types/types';
import Icon from '@mui/material/Icon';

interface Props {
  article: Article;
}

export const BasicCard: React.FC<Props> = (props) => {
  const { title, publishedAt, imageUrl, summary } = props.article;

  return (
    <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          height="217"
          image={imageUrl}
          alt={title}
          sx={{ mb: 1 }}
        />
      <CardContent>
        <Typography sx={{ mb: 1.5, opacity: 0.6, fontFamily: "Montserrat" }}>
        <Icon sx={{ pr: 0.5 }} aria-label="CalendarTodayOutlined">
          <CalendarTodayOutlinedIcon />
        </Icon>
          {publishedAt}
        </Typography>

        <Typography sx={{ mb: 2.5, fontFamily: "Montserrat" }} variant="h5" component="div">
          {title}
        </Typography>

        <Typography sx={{ fontFamily: "Montserrat" }} variant="body1">
          {summary}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
          color="primary"
          href="#readmore"
          size="small"
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
