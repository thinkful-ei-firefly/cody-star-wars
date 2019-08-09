import React from "react";

class SearchMain extends React.Component {
  state = {
    searchResults: [],
    loading: false,
    error: false
  };

  getSearchResults() {
    this.setState({
      searchResults: [
        {
          climate: "Arid",
          diameter: "10465",
          gravity: "1 standard",
          name: "Tatooine",
          orbital_period: "304",
          population: "200000",
          residents: [
            "https://swapi.co/api/people/1/",
            "https://swapi.co/api/people/2/"
          ],
          rotation_period: "23",
          surface_water: "1",
          terrain: "Dessert",
          url: "https://swapi.co/api/planets/1/"
        }
      ]
    });
  }

  render() {
    return;
  }
}

export default SearchMain;
