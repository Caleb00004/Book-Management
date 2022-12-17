import './App.css';
import { useState } from 'react';
import {useGetBooksQuery, useGetAuthorQuery} from './features/api/apiSlice'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import BookList from './pages/BookListPage';
import AddBook from './pages/AddBookPage';
import Navbar from './components/Navbar';
import SideNav from './components/SIdeNav';
import Alert from './components/Alert';
import SingleBook from './features/books/singleBook'
import EditBook from './features/books/EditBooks';

function App() {
  const {status: authorStatus, data: authors} = useGetAuthorQuery()
  const {data: books, status: bookStatus, error} = useGetBooksQuery()
  
  const [cartArray, setCartArray] = useState([])

  const [alertBox, setAlertBox] = useState({display: 'hide', message: 'nil'})

  function addToCart(bookItem) {

    alertBox.display === 'hide' && setAlertBox({display: 'show', message: 'Book Added to cart'})

//    displayAlert === 'hide' && setdisplayAlert('show')
    setCartArray(prevState => (
        [...prevState, bookItem]
    ))
    
    setTimeout(()=>{
      setAlertBox({display: 'hide', message: 'Book Added to cart'})
    }, 2000)

  }

  function subtractFromCart(bookItem) {
      setCartArray(prevState => {
          let newArray = prevState.filter(item => (
              item.id != bookItem.id
          ))

          return (newArray)
      })
  }

  function clearCart() {
      setCartArray([])
  }

//  console.log('running')
  return (
    <>
      <Navbar cart={cartArray} />
      <Alert alertData={alertBox}/>
      <div className='page-layout'>
        <div className='mainNav'>
          <SideNav />
        </div>
        <div className='otherSection'>
        <Routes>
          <Route path='/' element={<Home bookData={books} authorData={authors} error={error} bookStatus={bookStatus} authorStatus={authorStatus}/>}></Route>

          <Route path='/booklist' element={<BookList />}></Route>

          <Route path='singlePage'>
            <Route path=':bookId' element = {<SingleBook addCart={addToCart} removeCart={subtractFromCart} cart={cartArray} bookStatus={bookStatus} authorStatus={authorStatus}/>}></Route>
            <Route path='/singlePage/edit/:bookId' element={<EditBook bookStatus={bookStatus} authorStatus={authorStatus} />}></Route>
          </Route>

          <Route path='addbook'>
            <Route index  element={<AddBook status={authorStatus} authorData={authors}/>} />
          </Route>

          <Route path='/checkout' element={<Checkout cart={cartArray} removeCart={subtractFromCart} clearCart={clearCart} alertData={alertBox} setAlert={setAlertBox}/>} />
        </Routes>
        </div>
      </div>

    </>
  );
}

export default App;