import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li
			key={book.title}
			onClick={ () => this.props.selectBook(book) }
			className="list-group-item">
			{book.title}
		</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

// Anything return from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passes to all of
	// our reducers
	return bindActionCreators( { selectBook: selectBook }, dispatch )
}

// Promote BookList from a component to a comtainer - it needs to know
// about this new dispacth method, selectBook. Make it available
// as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
