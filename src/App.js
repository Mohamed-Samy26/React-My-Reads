/******************************************
 *  Author : Mohamed Samy   
 *  Created On : Sat Dec 18 2021
 *  File : App.js
 *******************************************/

import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
    state = {
        books: []
    }
    onUpdateShelf = async (book, shelf) => {
        await BooksAPI.update(book, shelf)
        const newBooks = await BooksAPI.getAll();
        this.setState(() => ({ books: newBooks }));
    };
    addSearch = (book) => {
        this.setState(prevState => prevState.books.push(book));
    }
    componentDidMount() {

        BooksAPI.getAll()
            .then((Books) => {
                this.setState(() => ({
                    books: Books
                }))
            })

    }
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" ><ListBooks books={this.state.books} onUpdateShelf={this.onUpdateShelf} /> </Route>
                    <Route exact path="/search"><Search books={this.state.books} onUpdateShelf={this.onUpdateShelf} addSearch={this.addSearch} /></Route>
                </Switch>
            </div>
        )
    }
}
export default BooksApp