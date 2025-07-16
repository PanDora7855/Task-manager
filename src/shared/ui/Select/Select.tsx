import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.css';
import { getCategoryColor, getPriorityColor, getStatusColor } from '@entities/task/lib/taskStyle';
import type { TaskCategory, TaskPriority, TaskStatus } from '@entities/task/lib/types';

const Select = ({
	items,
	category,
	onChange,
	value
}: {
	items: string[];
	category: string;
	onChange: (value: string, option: string) => void;
	value: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef(null);

	const type = (item: TaskCategory | TaskPriority | TaskStatus) => {
		if (category === 'category') {
			return getCategoryColor(item as TaskCategory).color;
		} else if (category === 'priority') {
			return getPriorityColor(item as TaskPriority).color;
		} else {
			return getStatusColor(item as TaskStatus).color;
		}
	};

	const options = items.map((item) => ({
		value: item,
		color: type(item as TaskCategory | TaskPriority | TaskStatus)
	}));

	const [selectedOption, setSelectedOption] = useState({ value: '', color: '' });

	useEffect(() => {
		const found = options.find((opt) => opt.value === value);
		if (found) {
			setSelectedOption(found);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value, items]);

	const handleOptionClick = (option: (typeof options)[0]) => {
		setSelectedOption(option);
		onChange(option.value, category);
		setIsOpen(false);
	};

	const handleSelectClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.selectContainer} ref={selectRef}>
			<div className={styles.selectButton} onClick={handleSelectClick}>
				{selectedOption && (
					<div className={styles.colorIndicator} style={{ backgroundColor: selectedOption.color }} />
				)}
				<span className={styles.selectText}>{selectedOption ? selectedOption.value : 'Выберите...'}</span>
			</div>

			{isOpen && (
				<div className={styles.dropdown}>
					<div className={styles.dropdownContent}>
						{options.map((option, index) => (
							<button key={index} className={styles.option} onClick={() => handleOptionClick(option)}>
								<div className={styles.colorIndicator} style={{ backgroundColor: option.color }} />

								<span className={styles.optionText}>{option.value}</span>
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
export default Select;
