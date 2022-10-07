import { useGetBooksQuery } from '../features/api/apiSlice'
import './home.css'

export default function Home() {
    const {data, isSuccess, isLoading, isError, error} = useGetBooksQuery()

//    isSucess && console.log(data)

    let content;
    if (isLoading) {
        content = <h1>Loading Data</h1>
    } else if (isSuccess) {
        content = data.map(item => (
            <div className='book-item'>
                <h3 style={{color: 'purple'}}>{item.title}</h3>
                <p className='author'>Author: ....</p>
                <p>price: {item.price}$</p>
                <p>{item.summary.substring(0,50)} <span style={{color:'purple', fontStyle:'italic'}}>more...</span></p>
            </div>
        ))
    } else if (isError) {
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
            <h1>Books Availble</h1>

            <div className='books-grid'>
                {content}
            </div>
        </div>
    )
}

