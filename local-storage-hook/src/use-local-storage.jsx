import { useEffect, useState } from 'react';

export default function useLocalStorage(keyName, initialValue) {
	const [value, setValue] = useState(() => {
		try {
			const storedValue = localStorage.getItem(keyName);

			if (storedValue === null) {
				return initialValue;
			}

			return JSON.parse(storedValue);
		} catch (error) {
			console.error(`Failed to parse localStorage key "${keyName}":`, error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(keyName, JSON.stringify(value));
		} catch (error) {
			console.error(`Failed to set localStorage key "${keyName}":`, error);
		}
	}, [keyName, value]);

	return [value, setValue];
}
