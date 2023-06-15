import { SearchIcon } from '@/icons';
import styled from 'styled-components';

interface SearchProductProps {
	value: string;
	setValue: (value: string) => void;
}

export function SearchProduct({ value, setValue }: SearchProductProps) {
	return (
		<StyledContainer>
			<StyledInput
				type='text'
				value={value}
				placeholder='Pesquise por um produto'
				onChange={(e) => setValue(e.target.value)}
			/>
			<SearchIcon className='stroke-icon input-icon' size={20} />
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: left;
	position: relative;

	margin-bottom: 25px;
`;

const StyledInput = styled.input`
	background: var(--base-color);
	border-radius: 5px;
	width: 100%;
	height: 50px;
	padding: 0 25px 0 70px;

	font-weight: 600;
	font-size: 17px;
	line-height: 125%;
	text-align: left;
	letter-spacing: 0.75px;
	outline: none;

	&::placeholder {
		font-weight: 500;
		color: var(--placeholder-color);
	}
`;
