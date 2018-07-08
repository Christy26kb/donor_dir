import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const screenwidth=window.screen.availWidth;

const styles =  ({
  head: {
    display: 'flex',
    flexDirection:'row',
    height:30,
    width:screenwidth,
    backgroundColor:'#e30d4f',

  },
});


export default class MyHeader extends React.Component {
  render() {
    return (
      <div className={styles.head}>
     <h3>HEad</h3>
      </div>
    );
  }
}