import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UserTile from './UserTile.js';
import firebase from 'firebase';
import { CircularProgress, IconButton, Avatar, MenuItem, TextField, Button } from '@material-ui/core';
import './Maincontent.css';
import { FilterList } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import { isObject } from 'util';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


function Transition(props) {
  return <Slide direction="up" {...props} />;
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
  filterButton: {
    position: 'fixed',
    bottom: 25,
    right: 40,
  },
  avatar: {
    color: '#fff',
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 35,
    backgroundColor: '#ffffff',
    marginLeft: 15,
  },
  textField: {
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    width: 230,
  },
  button: {
    margin: theme.spacing.unit,
    marginRight: 40,
    marginLeft: 10,
  },
});


class SearchTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      district: '',
      state: 'Kerala',
      open: false,
      value: 0,
      isLoading: true,
      empty: false,
      currentTabData: [],
      orgDataStack: [],
      offlineRecords: [],
    };
    this.offlineRecordFetch();
  }

  offlineRecordFetch = async () => {
    var temp = await localStorage.getItem('offlineRecordsIndex');
    const offlinedata = JSON.parse(temp);
    if (offlinedata) {
      this.setState({ currentTabData: offlinedata, orgDataStack: offlinedata, isLoading: false, empty: false })
    }
    else {
      this.setState({ isLoading: false, empty: true, currentTabData: [], orgDataStack: [] });
    }

  };

  toggleFilter = () => () => {
    if (this.state.open) {
      this.setState({ open: false });
    }
    else {
      this.setState({ open: true });
    }

  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleFilterChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  clearFilters() {

    this.setState({
      state: "Kerala",
      district: "Ernakulam",
      currentTabData: this.state.orgDataStack,
    });
  };

  filterData = () => () => {
    const data = this.state.orgDataStack;
    var update = [];
    var distt = this.state.district;
    var statt = this.state.state;
    update = data.filter((user) => user.district.toUpperCase() == distt.toUpperCase() && user.state.toUpperCase() == statt.toUpperCase());
    this.setState({ currentTabData: update, open: false });
  };

  fetchData = (bgroup) => () => {
    //console.log(bg_state, bgroup);
    firebase
      .database()
      .ref("/users")
      .orderByChild("bloodgroup")
      .equalTo(bgroup)
      .on("value", (data) => {
        if (data.val() != undefined) {
          this.setState({
            currentTabData: Object.values(data.val()),
            orgDataStack: Object.values(data.val()),
            isLoading: false,
            empty: false
          });
        }
        else {
          this.setState({ isLoading: false, empty: true, currentTabData: [], orgDataStack: [] });
        }
      });

  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    var { Apos, Aneg, Bpos, Bneg, Opos, Oneg, ABpos, ABneg, offline } = [];
    const loader = <CircularProgress color="inherit" size={20} />;
    const empty_e = <p>No results found!</p>;
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

            <Tab label="Offline" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.offlineRecordFetch} />
            <Tab label="A+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("A+").bind()} />
            <Tab label="A-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("A-").bind()} />
            <Tab label="B+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("B+").bind()} />
            <Tab label="B-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("B-").bind()} />
            <Tab label="O+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("O+").bind()} />
            <Tab label="O-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("O+").bind()} />
            <Tab label="AB+" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("AB+").bind()} />
            <Tab label="AB-" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} onClick={this.fetchData("AB-").bind()} />
          </Tabs>
        </AppBar>

        {value === 0 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {offline = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 1 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {Apos = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 2 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {Aneg = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 3 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {Bpos = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 4 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {Bneg = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 5 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {Opos = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 6 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {Oneg = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 7 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {ABpos = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}
        {value === 8 && <TabContainer>
          {this.state.isLoading ? loader : null}
          {ABneg = this.state.currentTabData.map((item) => <UserTile key={item.uid} data={item} />)}
          {this.state.empty ? empty_e : null}
        </TabContainer>}

        {/*Filter Button*/}
        <div className={classes.filterButton}>
          <IconButton onClick={this.toggleFilter().bind()}>
            <Avatar className={classes.avatar}>
              <FilterList />
            </Avatar>
          </IconButton>
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.toggleFilter().bind()}
          TransitionComponent={Transition}
        >
          <div className={classes.container}>
            <IconButton style={{ marginBottom: 20 }} onClick={this.toggleFilter().bind()} >
              <CloseIcon />
            </IconButton>
            <p style={{ color: 'grey', marginLeft: 20 }}>Filter by</p>
            <form noValidate autoComplete="on">
              <TextField
                required
                id="filter-by-state"
                label="State"
                select
                value={this.state.state}
                onChange={this.handleFilterChange('state')}
                className={classes.textField}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Sort by state"
                margin="normal"
              >
                {states.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="filter-by-district"
                label="District"
                select
                value={this.state.district}
                onChange={this.handleFilterChange('district')}
                className={classes.textField}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText="Sort by district"
                margin="normal"
              >
                {districts.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </form>
            <Button variant="outlined" style={{ marginTop: 20 }} className={classes.button} onClick={this.clearFilters.bind(this)} >
              Clear filters
      </Button>
            <Button variant="outlined" className={classes.button} onClick={this.filterData().bind()}>
              Apply filters
      </Button>
          </div>
        </Dialog>

      </div>
    );
  }
}

//Data list for states and district filters.
const states = [
  {
    value: 'kerala',
    label: 'Kerala',
  },
];

const districts = [
  {
    value: 'ernakulam',
    label: 'Ernakulam',
  },
  {
    value: 'idukki',
    label: 'Idukki',
  },
  {
    value: 'thrissur',
    label: 'Thrissur',
  },
  {
    value: 'trivandrum',
    label: 'Trivandrum',
  },
  {
    value: 'kollam',
    label: 'Kollam',
  },
  {
    value: 'alappuzha',
    label: 'Alappuzha',
  },
  {
    value: 'pathanamthitta',
    label: 'Pathanamthitta',
  },
  {
    value: 'kottayam',
    label: 'Kottayam',
  },
  {
    value: 'palakkad',
    label: 'Palakkad',
  },
  {
    value: 'malappuram',
    label: 'Malappuram',
  },
  {
    value: 'kozhikode',
    label: 'Kozhikode',
  },
  {
    value: 'wayanad',
    label: 'Wayanad',
  },
  {
    value: 'kannur',
    label: 'Kannur',
  },
  {
    value: 'kasargode',
    label: 'Kasargode',
  },
];

SearchTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTab);