import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  colorSquare: {
    width: '10px',
    height: '10px',
  },
  secondary: {
    color: '#9ca8b4',
    paddingLeft: '100px',
  },
  directionArrow: {
    fontSize: '10',
  },
  positive: {
    textAlign: 'right',
    color: '#51c68b'
  },
  negative: {
    textAlign: 'right',
    color: '#ee534b'
  }
});

const colors = ['#aa5a7c', '#c5a154', '#7bc9cd', '#7068ba']

const rowColor = row => colors[row];

function Channel(props) {
  const classes = useStyles();

  const { channel, index, formatCurrency } = props;
  const { name, quantity, lastYearQuantity } = channel;
  const change = +((quantity - lastYearQuantity) / quantity * 100).toFixed(1);

  return (
    <tr key={name}>
      <td><div style={{ backgroundColor: rowColor(index) }} className={classes.colorSquare} /></td>
      <td>{name}</td>
      <td className={classes.secondary}>${formatCurrency(quantity)}</td>
      <td
        className={
          (change > 0) ? classes.positive : classes.negative
        }
      >
      <span className={classes.directionArrow}>
        { (change > 0) ?
          <i style={{ fontSize: '12px' }} className="material-icons">arrow_upward</i> :
          <i style={{ fontSize: '12px' }} className="material-icons">arrow_downward</i>
        }
      </span>
      {Math.abs(change)}</td>
    </tr>
  )
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  formatCurrency: PropTypes.func.isRequired
}

export default Channel;