import { globalState } from "../api/apiSlice"
import { useParams } from "react-router"
import './singleBook.css'

export default function SingleBook() {

    const {bookData, AuthorsData} = globalState
    const {bookId} = useParams()

    console.log(bookData)
    const currentBook = bookData.filter(item => item.id == bookId)
    console.log(currentBook)    

    console.log(AuthorsData)
    function getAuthor(id) {
        const currentAuthor = AuthorsData.filter(item => item.id === id)
        return currentAuthor[0].name
    }
//    console.log(bookId)

    return (
        <div className='singleBook'>
            <h3 style={{color: 'purple'}}>{currentBook[0].title}</h3>
            <p className='author'>Author: {getAuthor(currentBook[0].userId)}</p>
            <p>price: {currentBook[0].price}$</p>
            <p>Summary: {currentBook[0].summary} <span style={{color:'purple', fontStyle:'italic'}}></span></p>

            <div className="button-group">
                <button className="delete-btn">Delete</button>
                <button className="edit-btn">Edit Book</button>
            </div>
        </div>
    )
}