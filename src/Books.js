/******************************************
 *  Author : Mohamed Samy   
 *  Created On : Sat Dec 18 2021
 *  File : Bools.js
 *******************************************/
import React from 'react'
class Books extends React.Component {
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => {
                                this.props.onUpdateShelf(this.props.book, e.target.value);
                                if (this.props.shelf === 'none') {
                                    this.props.addSearch(this);
                                }
                            }}>
                                <option value="move" disabled  >Move to...</option>
                                <option value="currentlyReading" hidden>Currently Reading</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read" >Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.author}</div>
                </div>
            </li>);
    }
}

export default Books;