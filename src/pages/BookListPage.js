import { Link } from "react-router-dom"
import { globalState } from "../features/api/apiSlice"
import './booklist.css'

export default function BookList() {
    const {bookData} = globalState

    const list = bookData.map(bookItem => (
        <li> {bookItem.title} <Link to={`/singlePage/${bookItem.id}`}>Link</Link></li>
    ))
    return (
        <div className="book-list">
            <h2>Books Currently Available</h2>
            <ul>
                {list}
            </ul>
        </div>
    )
}


