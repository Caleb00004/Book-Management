import { globalState } from "../api/apiSlice"
import { useParams } from "react-router"
import { useDeleteBookMutation } from "../api/apiSlice"
import { useNavigate } from "react-router"
import {useGetBooksQuery, useGetAuthorQuery} from '../api/apiSlice'
import './singleBook.css'

export default function SingleBook({addCart, removeCart, cart, bookStatus, authorStatus}) {

//    const {status: authorStatus, data: authors} = useGetAuthorQuery()
//    const {data: books, status: bookStatus, error} = useGetBooksQuery()

    const navigateTo = useNavigate()

    const {bookData, AuthorsData} = globalState
    const {bookId} = useParams()
    const [deleteBook, isSuccess] = useDeleteBookMutation()
//    console.log(useDeleteBookMutation())


    if(bookStatus == 'fulfilled' && authorStatus == 'fulfilled'){
    
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
        
        function cartIcon() {
            let itemInCart = cart.some((item)=>{ 
                return item.id == currentBook[0].id 
              })
            
              console.log(cart)
            //console.log(itemInCart)
            if (itemInCart) {
                return <svg onClick={() => removeCart(currentBook[0]) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"/></svg>
                } else {
                return <svg onClick={() => addCart(currentBook[0]) } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
            }
        }
    
        return (
            <div className='singleBook'>
                <div className="h3-cart">
                    <h3 style={{color: 'purple'}}>{currentBook[0].title} </h3>
                    {cartIcon()}
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
    } else {
        return (
            <h1>Loading Data</h1>
        )
    }
 
}