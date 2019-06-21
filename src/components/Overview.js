import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Channel from './Channel';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#212934',
    color: 'white',
    padding: '50px',
  },
  title: {
    fontWeight: '300',
    marginBottom: '20px',
  },
  primary: {
    fontWeight: '400',
    marginBottom: '8px',
  },
  secondary: {
    color: '#9ca8b4',
    marginBottom: '8px',
  },
  addChannel: {
    position: 'relative',
    top: '3px',
    fontSize: '19px',
    color: '#bdbfc3',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  channelTable: {
    borderSpacing: '5px 10px',
    marginTop: '-10px',
    marginLeft: '-5px',
  }
});

const formatCurrency = val => val.toLocaleString(navigator.language, { minimumFractionDigits: 2 });

const formatNumber = val => val.toLocaleString(navigator.language, { minimumFractionDigits: 0 });

function Overview(props) {
  const classes = useStyles();

  const { gross, tax, calculations, channels } = props.state;

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title} >
        Sales this month
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.primary}>
            ${formatCurrency(gross)} gross
          </Typography>
          <Typography className={classes.secondary}>
            ${formatCurrency(tax)} tax
          </Typography>
          <Typography className={classes.secondary}>
            {formatNumber(calculations)} calculations
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6" className={classes.primary}>
            {channels.length} channels
            <i
              className={classes.addChannel + " material-icons"}
              onClick={props.onAddChannel}
            >
              add_circle
            </i>
          </Typography>
          <table className={classes.channelTable}>
            <tbody>
              {channels.map((channel, index) => (
                <Channel
                  key={channel.name}
                  channel={channel}
                  index={index}
                  formatCurrency={formatCurrency}
                />
              ))}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Overview;