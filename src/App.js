import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookDetails from './components/BookDetails';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/search' element={<SearchBar />} />
        <Route path='/details' element={<BookDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
