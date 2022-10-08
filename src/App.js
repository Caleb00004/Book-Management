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

function App() {
  const {isSuccess: authorLoaded, data: authors} = useGetAuthorQuery()
  const {data: books, isSuccess: bookLoaded, isLoading, isError, error} = useGetBooksQuery()
//  console.log(books)  
//  console.log(useGetBooksQuery().data)
//console.log(authors)
//console.log(books)
  return (
    <>
      <Navbar />
      <div className='page-layout'>
        <SideNav />
        <Routes>
          <Route path='/' element={<Home bookData={books} authorData={authors} authorLoaded={authorLoaded} bookLoaded={bookLoaded} error={error} loading={isLoading}/>}></Route>

          <Route path='/booklist' element={<BookList />}></Route>
          <Route path='/singlePage/:bookId' element={<SingleBook />} />

          <Route path='addbook'>
            <Route index  element={<AddBook authorLoaded={authorLoaded} authorData={authors}/>} />
          </Route>

          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>

    </>
  );
}

export default App;