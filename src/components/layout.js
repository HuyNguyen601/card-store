import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Person} from '@material-ui/icons';

import {styles} from '../utils/styles'
import {getUser, logout} from '../services/auth'
import {navigate} from 'gatsby'

class Layout extends React.Component {

  render() {
    const {classes, children} = this.props;
    return (<div className={classes.root}>
      <CssBaseline/>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid container justify='center' alignItems='center'>
                <Grid item xs={3}>
                  Store
                </Grid>
                <Grid item>
                  {getUser().name}
                  <IconButton color="inherit" onClick={e => logout(() => navigate(`/`))}>
                    <Person/>
                  </IconButton>
                  <IconButton color="inherit" onClick={e => logout(() => navigate(`/`))}>
                    <Badge badgeContent={1} color='secondary'>
                      <ShoppingCart/>
                    </Badge>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
    </div>);
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
