/******************************************
 *  Author : Mohamed Samy   
 *  Created On : Sat Dec 18 2021
 *  File : Search.js
 *******************************************/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'
class Search extends Component {
    state = {
        query: '',
        foundBooks: []
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        this.updateSearch()
    }

    updateSearch = () => {
        if (this.state.query === '') {
            this.setState(() => ({ foundBooks: [] }))
        }
        else {
            BooksAPI.search(this.state.query).then((Books) => {
                if (Books.error) {
                    this.setState(() => ({ foundBooks: [] }))
                }
                else {
                    this.setState(() => ({
                        foundBooks: Books
                    }))
                }
            })
        }
    }

    showBooks = () => {
        if (this.state.query !== '') {
            return this.state.foundBooks.map((book) => (
                <Books
                    key={book.id}
                    id={book.id}
                    onChange={this.props.onChange}
                    book={book}
                    title={book.title}
                    author={book.authors}
                    image={book.imageLinks.smallThumbnail}
                    shelf={book.shelf}
                    onUpdateShelf={this.props.onUpdateShelf}
                />
            ));
        }
        else { return '' }

    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.showBooks()}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;