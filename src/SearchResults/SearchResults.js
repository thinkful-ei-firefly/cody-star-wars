import React from 'react'
import ApiContext from '../ApiContext';

import './SearchResults.css'

class searchResults extends React.Component{

  static contextType = ApiContext

  render(){
    return(
      <div className='search-results'>
        {this.context.searchResults.map((result, i) => {
          return <li key={i}>{result.name !== undefined? result.name:result.title}</li>
        })}
      </div>
    )
  }
}

export default searchResults