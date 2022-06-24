import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'react-bootstrap';

function QuickSearch({ searchInput, setSearchInput }) {
	const fictionSubjects = [
        'Fiction',
		'Fantasy',
        'Adventure',
		'Romance',
        'Dystopian',
		'Contemporary',
        'Paranormal',
		'Mystery',
		'Science Fiction',
		'Horror',
	];
	const nonfictionSubjects = [
		'Nonfiction',
		'Biographies',
		'Health',
		'Diet',
		'Cooking',
		'Psychology',
		'Science',
		'Political Science',
        'History'
	];
	return (
		<div>
			<nav className='search-links'>
				<DropdownButton title='Fiction' id='fiction-dd'>
					{fictionSubjects.map((subject, index) => {
						return (
							<Dropdown.Item key={index}
								as='button'
								onClick={() =>
									setSearchInput({
										searchBy: 'subject:',
										searchValue: [subject],
									})
								}>
								{subject}
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
				<DropdownButton title='Nonfiction' id='nonfiction-dd'>
					{nonfictionSubjects.map((subject, index) => {
						return (
							<Dropdown.Item key={index}
								as='button'
								onClick={() =>
									setSearchInput({
										searchBy: 'subject:',
										searchValue: [subject],
									})
								}>
								{subject}
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
                
			</nav>
		</div>
	);
}

export default QuickSearch;
