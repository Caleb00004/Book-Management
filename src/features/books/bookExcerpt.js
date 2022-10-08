import {useNavigate} from 'react-router'

export default function BookExcerpt({bookData, authorData}) {

    function getAuthor(id) {
        const currentAuthor = authorData.filter(item => item.id === id)
        return currentAuthor[0].name
    }

    const navigateTo = useNavigate()

    return (
        <div className='book-item' onClick={() => navigateTo(`/singlePage/${bookData.id}`)}>
            <h3 style={{color: 'purple'}}>{bookData.title}</h3>
            <p className='author'>Author: {getAuthor(bookData.userId)}</p>
            <p>price: {bookData.price}$</p>
            <p>{bookData.summary.substring(0,50)} <span style={{color:'purple', fontStyle:'italic'}}>more...</span></p>
        </div>
    )
}