import { globalState } from "../api/apiSlice"
import { useParams, useNavigate } from "react-router"
import { useEditBookMutation } from "../api/apiSlice"
import { useEffect, useState } from "react"
export default function EditBook() {

    const [bookTitle, setBookTitle] = useState('')
    const [bookSummary, setBookSummary] = useState('')
    const [bookPrice, setBookPrice] = useState('')
    const [authorId, setAuthorId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
    const [editBook] = useEditBookMutation()
    
    const navigate = useNavigate()

    const {bookId} = useParams()
    const {bookData, AuthorsData} = globalState

    let {title, summary, price, userId, id} = bookData.find(state => state.id == bookId)

    useEffect(() => {
        setBookTitle(title)
        setBookSummary(summary)
        setBookPrice(price)
        setAuthorId(userId)
    },[])

    const authorList = AuthorsData.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
    ))

    const canAdd = [bookTitle, bookSummary, bookPrice].every(Boolean) && addRequestStatus == 'idle'
    
    function handleForm(e) {
        displayErrorMessage && setDisplayErrorMessage(false)
        e.preventDefault()

        console.log(bookTitle)
        console.log(bookSummary)
        console.log(authorId)

        if (addRequestStatus == 'idle') {

            console.log(authorId)

            try {
                setAddRequestStatus('pending')
                editBook({id: id, userId: Number(authorId), title: bookTitle, summary: bookSummary, price: bookPrice}).unwrap()
                    .then(fulfilled => ( 
                        displayErrorMessage && setDisplayErrorMessage(false),
                        setBookTitle(''),
                        setBookSummary(''),
                        setBookPrice(''),
                        navigate('/') 
                    ))
                    .catch(rejected => (
                        console.error(rejected),
                        setDisplayErrorMessage(true)                        
                    ))

            } catch (err) {
                console.error('Failed to save the post', err)
                setDisplayErrorMessage(true)
            } finally {
                setAddRequestStatus('idle')
            }
        } 
    } 
    /*
    function handleForm() {
        editBook
        console.log('called')
    } */

    return (
        <div className="addbookPage">
            <h1>Edit Book</h1>

            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="bookAuthor">Choose Author</label>
                    <select placeholder="sels" value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                        <option value={""}></option>
                        {authorList}
                    </select>
                </div>
                <label htmlFor="addBook">Enter Book Title</label>
                <div className="addBook">
                    <input
                        type="text"
                        id="new-todo"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)} 
                        placeholder="Book Title"
                    />
                </div>
                <label htmlFor="addBook">Enter Book Summary</label>
                <div className="addBook">
                    <textarea 
                        type="text"
                        id="new-todo"
                        value={bookSummary} 
                        onChange={(e) => setBookSummary(e.target.value)} 
                        placeholder="Book summary"                    
                    />
                </div>
                <label htmlFor="addBook">Enter Starting Price</label>
                <div className="addBook">
                    <input
                        type="number"
                        id="new-todo"
                        value={bookPrice}
                        onChange={(e) => setBookPrice(e.target.value)} 
                        placeholder="1"
                    />
                </div>
                <button disabled={!canAdd} className="submit">
                    submit
                </button>
                {displayErrorMessage && <h1 style={{color: 'red'}}>Error Saving Data Plese Try again</h1>}
            </form>
        </div>
    )
}