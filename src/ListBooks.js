/******************************************
 *  Author : Mohamed Samy   
 *  Created On : Sat Dec 18 2021
 *  File : ListBooks.js
 *******************************************/
import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';
class Listbooks extends React.Component {
    findBookShelf1 = () => {
        return this.props.books.filter(book => book.shelf === 'currentlyReading')
    }
    findBookShelf2 = () => {
        return this.props.books.filter(book => book.shelf === 'wantToRead')
    }
    findBookShelf3 = () => {
        return this.props.books.filter(book => book.shelf === 'read')
    }
    render() {
        return <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookShelf title="Currently Reading" books={this.findBookShelf1()} onUpdateShelf={this.props.onUpdateShelf} />
                <BookShelf title="Want to Read" books={this.findBookShelf2()} onUpdateShelf={this.props.onUpdateShelf} />
                <BookShelf title="Read" books={this.findBookShelf3()} onUpdateShelf={this.props.onUpdateShelf} />
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        </div>;
    }
}
export default Listbooks;