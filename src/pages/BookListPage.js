import { Link } from "react-router-dom"
import { globalState } from "../features/api/apiSlice"

export default function BookList() {
    const {bookData} = globalState

    const list = bookData.map(bookItem => (
        <li>{bookItem.title} <Link to={`/singlePage/${bookItem.id}`}>Link</Link></li>
    ))
    return (
        <div>
            <h1>BookList</h1>
            <h3>The List of Books Currently Available</h3>
            <ul>
                {list}
            </ul>
        </div>
    )
}