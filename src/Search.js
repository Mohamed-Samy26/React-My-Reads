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
    //query= '';
    state = {
        foundBooks: []
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        this.updateSearch(query)
    }

    handleShelf = (searchBooks) => {
        let booksOnShelf = {};
        this.props.books.forEach((book) => {
            booksOnShelf[book.id +''] = book.shelf;});
            const booksWithShelf = searchBooks.map((book) => {
                const shelf = booksOnShelf[book.id];
                if(!shelf){
                    return{...book,shelf:null}
                }
                return{...book,shelf}
            })
            return booksWithShelf;
        }
    updateSearch = (query) => {
        if (query === '') {
            this.setState(() => ({ foundBooks: [] }))
        }
        else {
            BooksAPI.search(query).then((Books) => {
                if (Books.error) {
                    this.setState(() => ({ foundBooks: [] }))
                }
                else {
                    const booksWithShelf = this.handleShelf(Books);
                    this.setState(() => ({
                        foundBooks: booksWithShelf //.filter((book) => (book.hasOwnProperty('imageLinks').hasOwnProperty('smallThumbnail') ))
                    }))
                }
            })
        }
    }

    showBooks = (query) => {
        if (query !== '') {
            return this.state.foundBooks.map((book) => (
                <Books
                    key={book.id}
                    id={book.id}
                    onChange={this.props.onChange}
                    book={book}
                    title={book.title}
                    author={book.authors}
                    //image={book.imageLinks.smallThumbnail}
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
                        <input type="text" placeholder="Search by title or author" 
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