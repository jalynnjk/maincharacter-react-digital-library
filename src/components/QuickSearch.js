import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'react-bootstrap';

function QuickSearch({ searchInput, setSearchInput }) {
	const fictionSubjects = [
        'Fiction',
		'Fantasy',
		'Romance',
		'Contemporary',
		'Mystery',
		'Science Fiction',
		'Horror',
	];
	const nonfictionSubjects = [
        'Nonfiction',
		'Biographies',
		'Psychology',
		'Health',
		'Diet',
		'Cook Book',
		'Politics',
	];
	return (
		<div>
			<nav className='search-links'>
				<DropdownButton title='Fiction'>
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
				<DropdownButton title='Nonfiction'>
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
