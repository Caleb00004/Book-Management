import { useGetBooksQuery, useGetAuthorQuery } from '../features/api/apiSlice'
import BookExcerpt from '../features/books/bookExcerpt'
import { globalState } from '../features/api/apiSlice'
import './home.css'

export default function Home({bookData, authorData, authorStatus, bookStatus, error,}) {

    let content;
    if (bookStatus == 'pending') {
        content = <h1>Loading Data...</h1>
    } else if (bookStatus == 'fulfilled' && authorStatus == 'fulfilled') {
        content = bookData.map(item => (
            <BookExcerpt bookData={item} authorData={authorData} key={item.id}/>
        ))
    } else if (bookStatus == 'rejected') {
        content = <h1>Error occured: {error.error}</h1>
        console.log(error)
    }

    return (
        <div className='home'>
            <div className='Hero-Section'>
                <h2>Book Management</h2>
                <button>Discover More</button>
            </div>
            <br/><br/>
            <h2>Books Availble</h2>
            <br/>
            <div className='books-grid'>
                {content}
            </div>
        </div>
    )
}

