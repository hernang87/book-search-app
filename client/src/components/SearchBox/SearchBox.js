import React, { Component } from 'react';
import './index.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onInputChange(e) {
    this.setState({ value: e.target.value });
  }

  onKeyUp(e) {
    if(e.which === 13) {
      this.onSearch();
    }
  }

  onSearch() {
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <div className="search-box">
        <div className="search-box__input__container">
          <input
            id="search"
            className="search-box__input"
            type="text"
            placeholder="Search for a book title or author"
            onChange={this.onInputChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        <button type="button" className="search-box__submit" onClick={this.onSearch} aria-label="Search">
          <i className="material-icons">search</i>
        </button>
      </div>
    );
  }
}

export default SearchBox;
