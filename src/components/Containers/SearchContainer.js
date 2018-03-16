/**
 * This is a Redux "Wrapper" component for <Search> component in Header/Search.
 * This inject specified stats and actions as props.
 *
 * To render <Search> component use this component(<SearchContainer>).
 * Don't directly render <Search>, beacuse then it will not have redux props.
 **/

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as searchActions from "../../actions/searchActions";
import Search from "../Header/Search/Search";

// Specifying which parts of states we want from redux storage
const mapStateToProps = state => {
  return {
    search: state.search,
    stores: state.stores
  };
};

// Specifying which actions we want from actions/searchAction.js.
// In here we simply say add all actions using bindActionCreators()
const mapDispatchToProps = dispatch => {
  return bindActionCreators(searchActions, dispatch);
};

// Wrapping <Search> with Redux
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
