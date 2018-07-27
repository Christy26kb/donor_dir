import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UserTile from './UserTile.js';
import firebase from 'firebase';
import { CircularProgress } from '@material-ui/core';
import ToggleButton from './ToggleButton.js';
import './Maincontent.css';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '90%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#007c91',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#007c91',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#007c91',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#007c91',
    },
  },
  tabSelected: {},
});

class SearchTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isLoading: true,
      empty: false,
      Apos: [],
      Aneg: [],
      Bpos: [],
      Bneg: [],
      Opos: [],
      Oneg: [],
      ABpos: [],
      ABneg: [],
    };
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  fetchData = (bg_state, group) => () => {
    //console.log(bg_state,group);
    firebase
      .database()
      .ref("/users")
      .orderByChild("bloodgroup")
      .equalTo('B-')
      .on("value", (data) => {
        if (data.val() != undefined) {
          //console.log(Object.values(data.val()));
          this.setState({ Apos: Object.values(data.val()), isLoading: false });
        }
        else {
          this.setState({ isLoading: false, empty: true });
        }
      });


  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    var { Apos_e, Bpos_e } = [];
    const loader = <CircularProgress color="inherit" size={20} />;
    const empty_e = <p>No users found!</p>;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="auto"
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >

            <Tab label="Status" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="Offline" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="A+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("Apos", "A+").bind(this)} />
            <Tab label="B+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="O+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="AB+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="A-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="B-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="O-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
            <Tab label="AB-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          </Tabs>
        </AppBar>

        {value === 0 &&
          <TabContainer>
            <div className='DonorText' >
              <h4 className='statusTitle' >Blood Donor's status</h4>
              <ToggleButton />
            </div>

          </TabContainer>}
        {value === 1 && <TabContainer>Offline directory list</TabContainer>}
        {value === 2 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {Apos_e = this.state.Apos.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 3 && <TabContainer>A-</TabContainer>}
        {value === 4 && <TabContainer>B+</TabContainer>}
        {value === 5 && <TabContainer>B-</TabContainer>}
        {value === 6 && <TabContainer>AB-</TabContainer>}
        {value === 7 && <TabContainer>AB+</TabContainer>}
        {value === 8 && <TabContainer>O+</TabContainer>}
        {value === 9 && <TabContainer>O+</TabContainer>}
      </div>
    );
  }
}

SearchTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTab);