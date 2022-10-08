import { useGetBooksQuery, useGetAuthorQuery } from '../features/api/apiSlice'
import './home.css'

export default function Home({bookData, authorData, authorLoaded, bookLoaded, error, loading}) {

    function getAuthor(id) {
        const currentAuthor = authorData.filter(item => item.id === id)
        return currentAuthor[0].name
    }

    let content;
    if (loading) {
        content = <h1>Loading Data</h1>
    } else if (bookLoaded && authorLoaded) {
        content = bookData.map(item => (
            <div className='book-item'>
                <h3 style={{color: 'purple'}}>{item.title}</h3>
                <p className='author'>Author: {getAuthor(item.userId)}</p>
                <p>price: {item.price}$</p>
                <p>{item.summary.substring(0,50)} <span style={{color:'purple', fontStyle:'italic'}}>more...</span></p>
            </div>
        ))
    } else {
        content = <h1>Error occured: {error}</h1>
    }

    return (
        <div className='home'>
            <h1>The Home Page</h1>

            <div className='Hero-Section'>
                <h2>Book Management</h2>
                <button>Discover More</button>
            </div>
            <br/><br/>
            <h2>Books Availble</h2>
            <br/><br/>
            <div className='books-grid'>
                {content}
            </div>
        </div>
    )
}

