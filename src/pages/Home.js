import { useGetBooksQuery, useGetAuthorQuery } from '../features/api/apiSlice'
import BookExcerpt from '../features/books/bookExcerpt'
// import { useNavigate } from 'react-router'
import { globalState } from '../features/api/apiSlice'
import './home.css'

export default function Home({bookData, authorData, authorStatus, bookStatus, error,}) {

//    console.log(globalState)
//    const navigateTo = useNavigate()

/*    function getAuthor(id) {
        const currentAuthor = authorData.filter(item => item.id === id)
        return currentAuthor[0].name
    } */

    let content;
    if (bookStatus == 'pending') {
        content = <h1>Loading Data</h1>
    } else if (bookStatus == 'fulfilled' && authorStatus == 'fulfilled') {
        content = bookData.map(item => (
            <BookExcerpt bookData={item} authorData={authorData}/>
/*            <div className='book-item' onClick={() => navigateTo('/singlePage/23')}>
                <h3 style={{color: 'purple'}}>{item.title}</h3>
                <p className='author'>Author: {getAuthor(item.userId)}</p>
                <p>price: {item.price}$</p>
                <p>{item.summary.substring(0,50)} <span style={{color:'purple', fontStyle:'italic'}}>more...</span></p>
        </div> */
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

