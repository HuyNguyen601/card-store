import React from "react"
import { Link } from "gatsby"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {withStyles} from '@material-ui/core/styles'

import Layout from "../components/layout"
import SEO from "../components/seo"
import tileData from '../components/tileData';

const styles = theme =>({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  gridList: {
    width: 1000,
    height: 2000,
  },
})
const IndexPage = ({classes}) => (
  <Layout>
    <SEO title="Home" keywords={[`3d-card`, `shopping`, `gift`]} />
    <main className={classes.content}>
      <div className={classes.appBarSpacer}/>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Feature Cards</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>${tile.price}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </main>

  </Layout>
)

export default withStyles(styles)(IndexPage)
