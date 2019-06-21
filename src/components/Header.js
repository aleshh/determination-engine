import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  header: {
    flex: 1,
  },
  moreButton: {
    color: 'black',
  },
  button: {
    backgroundColor: '#14B9F1',
    padding: '5px 10px',
    borderRadius: '2px',
  }
});

function Header(props) {
  const classes = useStyles();

  const { onMenu, onCalculate } = props;

  return (
    <Toolbar>
      <Typography edge="start" variant="h5" color="inherit" className={classes.header} >
        Determination engine
      </Typography>
      <IconButton aria-label="More" className={classes.moreButton} onClick={onMenu}>
      <i className="material-icons">more_vert</i>
      </IconButton>
      <Button variant="contained" color="primary" onClick={onCalculate} className={classes.button}>
        Calculate
      </Button>
    </Toolbar>
  );
}

Header.propTypes = {
  onMenu: PropTypes.func.isRequired,
  onCalculate: PropTypes.func.isRequired
}

export default Header;