import { ButtonType } from '@/types';
import styled from 'styled-components';

interface ButtonProps {
	name: string;
	onClick: () => void;
	type?: ButtonType;
}

export function ActionButton({
	name,
	onClick,
	type = ButtonType.default,
}: ButtonProps) {
	return (
		<StyledButton
			onClick={onClick}
			btnType={type || 'default'}
			getButtonStyle={getButtonStyle}>
			{name}
		</StyledButton>
	);
}

interface StyledButtonProps {
	btnType: ButtonType;
	getButtonStyle: (type: ButtonType) => string;
}

const StyledButton = styled.button<StyledButtonProps>`
	width: 100%;
	height: 57px;
	${({ btnType, getButtonStyle }) => getButtonStyle(btnType)}
	color: var(--primary-text-color);
	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
	flex: 0 0 100%;
	text-transform: uppercase;
	margin-bottom: 10px;

	&:hover {
		background: var(--button-hover-color);
		color: var(--contrast-text-color);
	}
`;

function getButtonStyle(type: ButtonType) {
	const commonStyle = `
            border: none;
        `;

	switch (type) {
		case 'highlight':
			return (
				`
                background: var(--accent-color);

            ` + commonStyle
			);
		case 'delete':
			return (
				`
                background: var(--delete-color);

            ` + commonStyle
			);
		case 'default':
		default:
			return `
                background: none;
                border: 1px solid #000000;
            `;
	}
}
