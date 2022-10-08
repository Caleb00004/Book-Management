import { retry } from "@reduxjs/toolkit/dist/query"
import { useNavigate } from "react-router"
import { useState } from "react"
import { useAddBooksMutation } from "../features/api/apiSlice"
import './addbook.css'


export default function AddBook({authorLoaded, authorData}) {

    const [bookTitle, setBookTitle] = useState('')
    const [bookSummary, setBookSummary] = useState('')
    const [bookPrice, setBookPrice] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [addBook] = useAddBooksMutation()
    const navigate = useNavigate()

    if (!authorLoaded) {
        return <h1>Data Loading</h1>
    }
    
    const authorList = authorData.map(author => (
        <option key={author.id}>{author.name}</option>
    ))

    function handleForm(e) {
        console.log('called')
        e.preventDefault()

        if (addRequestStatus == 'idle') {
            try {
                setAddRequestStatus('pending')
//                dispatch(addNewPost({ title, body: content, userId })).unwrap()
                addBook({id: 13, userId: 2, title: bookTitle, summary: bookSummary, price: bookPrice}).unwrap()

                setBookTitle('')
                setBookSummary('')
                setBookPrice('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const canAdd = [bookTitle, bookSummary, bookPrice].every(Boolean)

    return (
        <div className="addbookPage">
            <h1>AddBook kk</h1>

            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="bookAuthor">Choose Author</label>
                    <select placeholder="sels">
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
            </form>
        </div>

    )
}