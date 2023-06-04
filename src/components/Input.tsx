import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	value: string;
	Icon: React.FC;
	placeholder: string;
	setValue: (value: string) => void;
}

export function AppInput({ value, setValue, Icon, ...props }: InputProps) {
	return (
		<StyledContainer>
			<StyledInput
				{...props}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Icon />
		</StyledContainer>
	);
}

const StyledInput = styled.input`
	width: 100%;
	max-width: 475px;
	height: 70px;

	background: var(--base-color);
	border-radius: var(--border-radius);

	padding: 20px 70px;

	&::placeholder {
		font-weight: 400;
		color: var(--placeholder-color);
	}

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 125%;
	letter-spacing: 0.75px;
	color: var(--primary-text-color);

	:focus {
		outline: none;
	}
`;

const StyledContainer = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	margin-bottom: 25px;

	:last-of-type {
		margin-bottom: 50px;
	}
`;
