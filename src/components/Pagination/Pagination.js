import React from 'react'
import '../Pagination/Pagination.css';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = [];

		// Populating the Page Numbers in Pagination
    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++ ) {
        pageNumbers.push(i)
    }

    return (
			<nav>
				<ul className="pagination" key="{number}">
					{pageNumbers.map(number => (
						<li key="{number}" className="page-item">
								<a onClick={() => paginate(number)} href="!#" className="page-link">
									{number}
								</a>
						</li>
					))}
				</ul>
			</nav>
    )
}

export default Pagination