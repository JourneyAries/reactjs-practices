import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const DeleteableArea = ({ id, children }) => {
	const { isOver, setNodeRef } = useDroppable({
		id: id,
	});

	const style = {
		color: isOver ? 'green' : undefined,
	};

	return (
		<div ref={setNodeRef} style={style} className='flex flex-col gap-y-2'>
			{children}
		</div>
	);
};

export default DeleteableArea;
