import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

const DraggableItem = ({ item, children }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: item.id,
	});

	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;

	return (
		<li
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className='cursor-pointer rounded-sm px-4 py-3 bg-white text-slate-900 '>
			{children}
		</li>
	);
};

export default DraggableItem;
