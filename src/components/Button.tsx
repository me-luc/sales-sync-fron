import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	action?: () => void;
	text: string;
}

export function AppButton({ action, text, ...props }: ButtonProps) {
	return (
		<StyledButton onClick={action} {...props}>
			{text}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	width: 230px;
	height: 70px;

	font-weight: 500;
	line-height: 125%;
	letter-spacing: 0.75px;
	text-transform: capitalize;

	:hover {
		background-color: var(--button-hover-color);
	}
`;
