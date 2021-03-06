import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { changeWatching } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/watching';

const CountiesIndexTabs = ({
  currentTab,
  anyCountyFromFavourites,
  anyCountyFromSearch,
  changeWatching
}) => {
  return(
    <Nav justified bsStyle="tabs"
      activeKey={currentTab}
      onSelect={changeWatching}>
      <NavItem eventKey={watchingValues.all}>All</NavItem>

      <NavItem
        eventKey={watchingValues.fav}
        disabled={!anyCountyFromFavourites}>
        Favourites
      </NavItem>

      <NavItem
        eventKey={watchingValues.search}
        disabled={!anyCountyFromSearch}>
        Search
      </NavItem>
    </Nav>
  );
};

const mapState = ({ watching, searchedCounties, favouriteCounties }) => {
  return {
    currentTab: watching.currentTab,
    anyCountyFromFavourites: favouriteCounties.counties.length > 0,
    anyCountyFromSearch: searchedCounties.counties.length > 0
  };
};
const mapDispatch = { changeWatching };

export default connect(mapState, mapDispatch)(CountiesIndexTabs);
