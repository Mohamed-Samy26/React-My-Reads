/******************************************
 *  Author : Mohamed Samy   
 *  Created On : Sat Dec 18 2021
 *  File : BookShelf.js
 *******************************************/
import React from 'react'
import Books from './Books'

class BookShelf extends React.Component {
    shelfBooks = () => (this.props.books.map((book) => (
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
    )))
    render() {
        return <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.shelfBooks()}
                    </ol>
                </div>
            </div>
        </div>;
    }
}

export default BookShelf;