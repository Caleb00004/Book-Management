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
            <div className="h3-cart">
                <h3 style={{color: 'purple'}}>{currentBook[0].title} </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
            </div>
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