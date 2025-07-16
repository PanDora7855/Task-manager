import { useEffect, useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
	placeholder?: string;
	value?: string;
	onChange: (value: string, category: string) => void;
	type?: 'text' | 'password' | 'email' | 'number';
	category: string;
}

const Input = ({ placeholder = 'Введите текст...', value = '', onChange, type = 'text', category }: InputProps) => {
	const [input, setInput] = useState('');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
		onChange(e.target.value, category);
	};

	useEffect(() => {
		setInput(value);
	}, [value]);

	return (
		<input
			type={type}
			value={input}
			onChange={handleInputChange}
			placeholder={placeholder}
			className={styles.input}
		/>
	);
};

export default Input;
