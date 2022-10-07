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
//  const {getAuthor: authors} = useGetAuthorQuery()
  useGetAuthorQuery()
  const {data, isSuccess, isLoading, isError, error} = useGetBooksQuery()
//  console.log(useGetBooksQuery().data)
  isSuccess && console.log(data)
  return (
    <>
      <Navbar />
      <div className='page-layout'>
        <SideNav />
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/booklist' element={<BookList />}></Route>

          <Route path='addbook'>
            <Route index  element={<AddBook />} />
            <Route path=':bookId' element={<SingleBook />} />
          </Route>

          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>

    </>
  );
}

export default App;