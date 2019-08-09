import React from "react";
import { Route } from "react-router-dom";
import ApiContext from "../ApiContext";

import './SearchApp.css'

import SearchBar from "../SearchBar/SearchBar";

class SearchApp extends React.Component {
  state = {
    searchResults: [],
    loading: false,
    error: false
  };

  setSearchResults = (searchResults) => {
    this.setState({
      searchResults: searchResults
    });
  }

  getSearchResults = () => {
    return this.state.searchResults;
  }

  renderMainRoutes() {
    return (
    <Route path="/" component={SearchBar} />
    )
  }

  render() {
    const value = {
      searchResults: this.state.searchResults,
      setSearchResults: this.setSearchResults,
      getSearchResults: this.getSearchResults
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="search-app">
          <header>
            <h1>Star Wars Search!</h1>
          </header>
          {this.renderMainRoutes()}
          
        </div>
      </ApiContext.Provider>
    );
  }
}

export default SearchApp;
