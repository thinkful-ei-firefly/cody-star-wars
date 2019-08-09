import React from "react";
import ApiContext from "../ApiContext";
import SearchResults from "../SearchResults/SearchResults";

import './SearchBar.css'

class SearchBar extends React.Component {
  static contextType = ApiContext;

  handleSubmit = async e => {
    e.preventDefault();

    const searchTerm = e.target.search.value
    const searchCat = e.target.type.value

    try {
      const resp = await fetch(
        `https://swapi.co/api/${searchCat}/?search=${searchTerm}`
      );
      const data = await resp.json();
      this.context.setSearchResults(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  renderFolderDropDown = () => {
    const typeArr = ['films', 'people', 'planets', 'species', 'starships', 'vehicles']

    const typesJsx = typeArr.map((type, i) => {
      return (
        <option key={i} value={type}>
          {type}
        </option>
      );
    });
    return typesJsx;
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="type">Type</label>
          <select id="type" onChange={this.handleChange} defaultValue='people' required>
            {this.renderFolderDropDown()}
          </select>

          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" required/>
          <input type="submit" value="Search!" />
        </form>
        <SearchResults />
      </div>
    );
  }
}

export default SearchBar;
