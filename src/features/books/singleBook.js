import { globalState } from "../api/apiSlice"
import { useParams } from "react-router"
import { useDeleteBookMutation } from "../api/apiSlice"
import { useNavigate } from "react-router"
import './singleBook.css'

export default function SingleBook() {
    const navigateTo = useNavigate()

    const {bookData, AuthorsData} = globalState
    const {bookId} = useParams()
    const [deleteBook, isSuccess] = useDeleteBookMutation()
//    console.log(useDeleteBookMutation())

    const currentBook = bookData.filter(item => item.id == bookId)

    function getAuthor(id) {
        const currentAuthor = AuthorsData.filter(item => item.id === id)
        return currentAuthor[0].name
    }

    function handleDelete() {
        let b = currentBook[0]
        console.log(deleteBook())

        //deleteBook(b)
        deleteBook(b).unwrap()
            .then(fulfilled => navigateTo('/'))
            .catch(rejected => console.error(rejected)) 
            
//        navigateTo('/')
    }

    return (
        <div className='singleBook'>
            <h3 style={{color: 'purple'}}>{currentBook[0].title}</h3>
            <p><span style={{color: 'purple'}}>Author: </span>{getAuthor(currentBook[0].userId)}</p>
            <p><span style={{color: 'purple'}}>Price: </span>{currentBook[0].price}$</p>
            <p><span style={{color: 'purple'}}>Summary: </span> {currentBook[0].summary} <span style={{color:'purple', fontStyle:'italic'}}></span></p>

            <div className="button-group">
                <button onClick={() => handleDelete()} className="delete-btn">Delete</button>
                <button onClick={() => navigateTo(`/singlePage/edit/${currentBook[0].id}`)} className="edit-btn">Edit Book</button>
            </div>
        </div>
    )
}