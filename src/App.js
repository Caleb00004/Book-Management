import './App.css';
import {useGetBooksQuery} from './features/api/apiSlice'

function App() {
  const {data, isSucess, isLoading, isError, error} = useGetBooksQuery()

  isSucess && console.log(data)
  return (
    <div className="App">
      Learn React
    </div>
  );
}

export default App;