import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import BookDetails from './components/BookDetails';
import BookRecommendation from './components/BookRecommendation';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Header />
			<Routes>
        <Route path='/' element={<Home />} />
				<Route path='/search/*' element={<SearchBar />} />
				<Route path='/details/:id' element={<BookDetails />} />
				<Route
					path='/book-recommendation/:discoverGenres'
					element={<BookRecommendation />}
				/>
			</Routes>
		</div>
	);
}

export default App;
