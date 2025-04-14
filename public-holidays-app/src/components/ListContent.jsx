import React from 'react';

const ListContent = ({ data }) => {
	return (
		<ul className='flex flex-col gap-2'>
			{data &&
				data.map((holiday, index) => (
					<li key={index}>
						{`${holiday.startDate} - `}
						<span className='font-bold italic'>{holiday.name}</span>
					</li>
				))}
		</ul>
	);
};

export default ListContent;
