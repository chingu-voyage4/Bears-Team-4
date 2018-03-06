import { connect } from "react-redux";
import * as searchActions from "../actions/searchActions";
import { bindActionCreators } from "redux";

import Search from "../components/Search/Search";

const mapStateToProps = state => {
  return {
    search: state.search,
    stores: state.stores
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(searchActions, dispatch);
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
