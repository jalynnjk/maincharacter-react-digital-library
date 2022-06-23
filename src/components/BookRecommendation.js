import {useParams} from 'react-router-dom'
import { useEffect } from 'react'

function BookRecommendation(props) {
	// function pickGenre() {
	// 	let randomIndex = Math.floor(Math.random() * 3);
	// 	setDiscoverGenres(discoverGenres[randomIndex]);
	// 	console.log(discoverGenres[randomIndex]);
	// }
    const { discoverGenres } = useParams()
    useEffect(() => {
            console.log(discoverGenres)
		// 	const url = `https://www.googleapis.com/books/v1/volumes?q=subject${discoverGenres}&maxResults=40&key=${process.env.REACT_APP_API_KEY}
        // `
		// 	console.log(url);
		// 	fetch(url)
		// 		.then((res) => res.json())
		// 		.then((res) => {
		// 			console.log(res.volumeInfo);
		// 		})
		// 		.catch(console.error);
		}, []);

	return <div>
        hi from BookRecommendation
    </div>;
}

export default BookRecommendation;
