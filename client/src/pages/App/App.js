import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooksByQuery } from '../../actions';
import { SearchBox, CardGrid } from '../../components';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 300,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - this.state.offset)
      && this.props.hasMore
      && !this.props.isFetching
    ) {
      this.props.searchBooksByQuery(this.props.query, this.props.page + 1)
    }
  }

  render() {
    const content = this.props.books.length > 0
      ? <CardGrid cards={this.props.books} />
      : (!this.props.firstSearch && <p className="App__error">No se encontraron resultados</p>);

    return (
      <div className="App">
        <h1 className="App__title">Book Search</h1>
        <SearchBox onSearch={this.props.searchBooksByQuery} />
        { content }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.books.isFetching,
  books: state.books.results,
  page: state.books.page,
  totalPages: state.books.totalPages,
  hasMore: state.books.page < state.books.totalPages,
  query: state.books.query,
  firstSearch: state.books.firstSearch
});

export default connect(mapStateToProps, { searchBooksByQuery })(App);
