import { retry } from "@reduxjs/toolkit/dist/query"
import { useState } from "react"
import './addbook.css'


export default function AddBook({authorLoaded, authorData}) {

    const [bookTitle, setBookTitle] = useState('')
    const [bookSummary, setBookSummary] = useState('')
    const [bookPrice, setBookPrice] = useState('')

    if (!authorLoaded) {
        return <h1>Data Loading</h1>
    }
    
    const authorList = authorData.map(author => (
        <option key={author.id}>{author.name}</option>
    ))

    function handleForm(e) {
        e.preventDefault()

        
        console.log(bookTitle)
        console.log(bookSummary)
        console.log(bookPrice)
    }

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
                <button className="submit">
                    submit
                </button>
            </form>
        </div>

    )
}