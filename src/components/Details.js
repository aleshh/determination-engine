import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ArticleList from './ArticleList.js';
import ActionBox from './ActionBox.js'

const useStyles = makeStyles({
  root: {
    padding: '50px',
  },
  title: {
    fontWeight: '300',
    paddingBottom: '20px',
  },
});

function Details(props) {
  const classes = useStyles();

  const { articles } = props.state;

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4" color="inherit" className={classes.title} >
            Recent articles
          </Typography>
          <ArticleList articles={articles} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4" color="inherit" className={classes.title} >
            I want to…
          </Typography>
          <ActionBox />

        </Grid>
      </Grid>
    </Box>
  );
}

export default Details;