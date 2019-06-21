import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f6f7',
    padding: '20px',
  },
  linkList: {
    listStyle: 'none',
    margin: '0',
    paddingLeft: '0',
  },
  link: {
    display: 'block',
    color: 'black',
    fontSize: '16px',
    // fontWeight: '300',
    lineHeight: '50px',
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root} >
      <Link href="/invoices/add" className={classes.link}>
        Add invoices
      </Link>
      <Link href="/products/add" className={classes.link}>
        Add a product
      </Link>
      <Link href="/customers/add" className={classes.link}>
        Add customers
      </Link>
      <Link href="/acquisitions/manage" className={classes.link}>
        Manage an acquisition
      </Link>
    </Box>
  );
}