import './App.css';
import {useGetBooksQuery, useGetAuthorQuery} from './features/api/apiSlice'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import BookList from './pages/BookListPage';
import AddBook from './pages/AddBookPage';
import Navbar from './components/Navbar';
import SideNav from './components/SIdeNav';
import SingleBook from './features/books/singleBook'
import EditBook from './features/books/EditBooks';

function App() {
  const {status: authorStatus, data: authors} = useGetAuthorQuery()
  const {data: books, status: bookStatus, error} = useGetBooksQuery()
  console.log(useGetBooksQuery())
  //  console.log(books)  
  //  console.log(useGetBooksQuery().data)
  //console.log(authors)
  //console.log(books)

  return (
    <>
      <Navbar />
      <div className='page-layout'>
        <div className='mainNav'>
          <SideNav />
        </div>
        <div className='otherSection'>
        <Routes>
          <Route path='/' element={<Home bookData={books} authorData={authors} error={error} bookStatus={bookStatus} authorStatus={authorStatus}/>}></Route>

          <Route path='/booklist' element={<BookList />}></Route>
{/*          <Route path='/singlePage/:bookId' element={<SingleBook />} /> */}

          <Route path='singlePage'>
            <Route path=':bookId' element = {<SingleBook />}></Route>
            <Route path='/singlePage/edit/:bookId' element={<EditBook />}></Route>
          </Route>

          <Route path='addbook'>
            <Route index  element={<AddBook status={authorStatus} authorData={authors}/>} />
          </Route>

          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        </div>
      </div>

    </>
  );
}

export default App;