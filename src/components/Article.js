import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    clear: 'left',
    minHeight: '100px',
    marginBottom: '20px',
  },
  imageContainer: {
    float: 'left',
  },
  image: {
    width: '160px',
    border: '1px solid #ebeef0',
  },
  titleLink: {
    color: 'black',
  },
  title: {
    marginLeft: '175px',
  },
  summary: {
    color: '#939393',
    fontSize: '13px',
    marginLeft: '175px',
  }

});

function Article(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link target="_blank" rel="noopener" href={props.article.url}>
        <Box className={classes.imageContainer}>
          <img
            className={classes.image}
            src={process.env.PUBLIC_URL + '/images/' + props.article.imageUrl}
            alt={props.article.title}
          />
        </Box>
      </Link>
      <Link
        target="_blank"
        rel="noopener"
        className={classes.titleLink}
        href={props.article.url}
      >
        <Typography className={classes.title} >
          {props.article.title}
        </Typography>
      </Link>
      <Typography className={classes.summary} >
        {props.article.summary}
      </Typography>
    </Box>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  }).isRequired
}

export default Article;
