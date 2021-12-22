import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {BrowserRouter , Link} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
      * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
        <div className="app">
            
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
                <Link to="/search">Add a book</Link>
              </div>
        </div>
    )
  }
}

export default BooksApp
